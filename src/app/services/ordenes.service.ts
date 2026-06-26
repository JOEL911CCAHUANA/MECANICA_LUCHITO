import { Injectable, computed, signal } from '@angular/core';
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  updateDoc
} from 'firebase/firestore';

export interface Mecanico {
  id: string;
  nombre: string;
  dni?: string;
  telefono?: string;
  correo?: string;
  direccion?: string;
  especialidad?: string;
  fecha_ingreso?: string;
  estado?: string;
  disponible: boolean;
  trabajoActual?: string;
}

export interface Orden {
  id: string;
  cliente: string;
  vehiculo: string;
  descripcion: string;
  status: 'Pendiente' | 'En proceso' | 'Completada';
  mecanicoId?: string;
  mecanicoNombre?: string;
}

const MECANICOS_COLLECTION = 'MECANICOS';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {
  private db = getFirestore();
  private cancelarEscuchaMecanicos: (() => void) | null = null;

  ordenes = signal<Orden[]>([
    {
      id: '001',
      cliente: 'Juan Pérez',
      vehiculo: 'Auto',
      descripcion: 'Cambio de aceite y ajuste de frenos',
      status: 'Pendiente'
    },
    {
      id: '002',
      cliente: 'Carlos Díaz',
      vehiculo: 'Moto',
      descripcion: 'Revisión general de motor',
      status: 'Completada',
      mecanicoId: 'm2',
      mecanicoNombre: 'Ana Rojas'
    }
  ]);

  mecanicos = signal<Mecanico[]>([]);

  mecanicosDisponibles = computed(() => this.mecanicos().filter((mecanico) => mecanico.disponible));

  constructor() {
    this.cargarMecanicos();
  }

  private cargarMecanicos(): void {
    const mecanicosQuery = query(collection(this.db, MECANICOS_COLLECTION), orderBy('nombre_completo', 'asc'));
    this.cancelarEscuchaMecanicos?.();

    this.cancelarEscuchaMecanicos = onSnapshot(mecanicosQuery, (snapshot) => {
      const mecanicosData = snapshot.docs.map((docSnapshot) => {
        const data = docSnapshot.data() as Record<string, unknown>;
        return {
          id: docSnapshot.id,
          nombre: (data['nombre_completo'] as string) ?? (data['nombre'] as string) ?? 'Sin nombre',
          dni: data['dni'] as string | undefined,
          telefono: data['telefono'] as string | undefined,
          correo: data['correo'] as string | undefined,
          direccion: data['direccion'] as string | undefined,
          especialidad: data['especialidad'] as string | undefined,
          fecha_ingreso: data['fecha_ingreso'] as string | undefined,
          estado: data['estado'] as string | undefined,
          disponible: (data['disponible'] as boolean) ?? true,
          trabajoActual: data['trabajoActual'] as string | undefined
        };
      });
      this.mecanicos.set(mecanicosData);
    });
  }

  async agregarMecanico(mecanico: Omit<Mecanico, 'id' | 'disponible' | 'trabajoActual'>): Promise<void> {
    await addDoc(collection(this.db, MECANICOS_COLLECTION), {
      nombre: mecanico.nombre,
      nombre_completo: mecanico.nombre,
      dni: mecanico.dni || '',
      telefono: mecanico.telefono || '',
      correo: mecanico.correo || '',
      direccion: mecanico.direccion || '',
      especialidad: mecanico.especialidad || '',
      fecha_ingreso: mecanico.fecha_ingreso || new Date().toISOString(),
      estado: mecanico.estado || 'Activo',
      disponible: true,
      trabajoActual: null
    });
  }

  asignarOrden(ordenId: string, mecanicoId: string): void {
    const mecanico = this.mecanicos().find((item) => item.id === mecanicoId);
    if (!mecanico || !mecanico.disponible) {
      return;
    }

    this.ordenes.update((ordenes) =>
      ordenes.map((orden) => {
        if (orden.id !== ordenId) {
          return orden;
        }

        return {
          ...orden,
          mecanicoId,
          mecanicoNombre: mecanico.nombre,
          status: 'En proceso'
        };
      })
    );

    updateDoc(doc(this.db, 'mecanicos', mecanicoId), {
      disponible: false,
      trabajoActual: ordenId
    }).catch(() => {
      this.mecanicos.update((lista) =>
        lista.map((item) =>
          item.id === mecanicoId
            ? {
                ...item,
                disponible: false,
                trabajoActual: ordenId
              }
            : item
        )
      );
    });
  }

  marcarCompletada(ordenId: string): void {
    const orden = this.ordenes().find((item) => item.id === ordenId);
    if (!orden) {
      return;
    }

    this.ordenes.update((ordenes) =>
      ordenes.map((item) =>
        item.id === ordenId
          ? {
              ...item,
              status: 'Completada'
            }
          : item
      )
    );

    if (orden.mecanicoId) {
      updateDoc(doc(this.db, 'mecanicos', orden.mecanicoId), {
        disponible: true,
        trabajoActual: undefined
      }).catch(() => {
        this.mecanicos.update((lista) =>
          lista.map((item) =>
            item.id === orden.mecanicoId
              ? {
                  ...item,
                  disponible: true,
                  trabajoActual: undefined
                }
              : item
          )
        );
      });
    }
  }

  crearOrden(cliente: string, vehiculo: string, descripcion: string, mecanicoId?: string): void {
    const numeroNuevo = String(this.ordenes().length + 1).padStart(3, '0');
    const mecanico = mecanicoId ? this.mecanicos().find((item) => item.id === mecanicoId) : undefined;

    const nuevaOrden: Orden = {
      id: numeroNuevo,
      cliente,
      vehiculo,
      descripcion,
      status: mecanico ? 'En proceso' : 'Pendiente',
      mecanicoId: mecanico?.id,
      mecanicoNombre: mecanico?.nombre
    };

    this.ordenes.update((ordenes: Orden[]) => [nuevaOrden, ...ordenes]);

    if (mecanico) {
      updateDoc(doc(this.db, 'mecanicos', mecanico.id), {
        disponible: false,
        trabajoActual: nuevaOrden.id
      }).catch(() => {
        this.mecanicos.update((lista) =>
          lista.map((item) =>
            item.id === mecanico.id
              ? {
                  ...item,
                  disponible: false,
                  trabajoActual: nuevaOrden.id
                }
              : item
          )
        );
      });
    }
  }
}
