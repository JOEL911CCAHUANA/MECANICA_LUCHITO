import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  onSnapshot,
  orderBy,
  Query,
  Unsubscribe,
  CollectionReference
} from '@angular/fire/firestore';

/**
 * Interfaz que define la estructura de un documento Mecánico en Firestore
 */
export interface Mecanico {
  id?: string;
  nombre_completo: string;
  correo: string;
  telefono: string;
  dni: string;
  especialidad: string;
  estado: string; // "activo" o "inactivo"
  id_mecanico?: string;
  fecha_ingreso?: any;
}

/**
 * Servicio para manejar todas las operaciones de Mecánicos en Firestore
 */
@Injectable({
  providedIn: 'root'
})
export class MecanicoService {
  private readonly COLLECTION_NAME = 'MECANICOS';
  private db: Firestore;
  private unsubscribes: Map<string, Unsubscribe> = new Map();

  constructor(firestore: Firestore) {
    this.db = firestore;
    console.log('✅ MecanicoService inicializado');
  }

  /**
   * Obtiene la referencia a la colección de mecánicos
   */
  private getMecanicosCollection(): CollectionReference {
    return collection(this.db, this.COLLECTION_NAME);
  }

  /**
   * Suscribe en tiempo real a todos los mecánicos ordenados por nombre
   * @param callback Función que se ejecuta cuando los datos cambian
   * @returns Función para desuscribirse
   */
  public suscribirMecanicos(callback: (mecanicos: Mecanico[]) => void): Unsubscribe {
    try {
      console.log('📡 Intentando conectar a Firestore...');
      
      const q: Query = query(
        this.getMecanicosCollection(),
        orderBy('nombre_completo', 'asc')
      );

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          console.log(`✅ Snapshot recibido: ${snapshot.docs.length} documentos`);
          
          const mecanicos: Mecanico[] = snapshot.docs.map(doc => {
            const data = doc.data();
            console.log('📄 Documento:', { id: doc.id, ...data });
            return {
              id: doc.id,
              ...data as Omit<Mecanico, 'id'>
            };
          });

          callback(mecanicos);
        },
        (error) => {
          console.error('❌ Error en suscripción a Firestore:', error);
          console.error('Código de error:', error.code);
          console.error('Mensaje de error:', error.message);
          throw error;
        }
      );

      // Guardar unsubscribe para limpiar después
      this.unsubscribes.set('mecanicos', unsubscribe);
      return unsubscribe;

    } catch (error) {
      console.error('❌ Error al suscribir a mecánicos:', error);
      throw error;
    }
  }

  /**
   * Crea un nuevo mecánico en Firestore
   */
  public async crearMecanico(mecanico: Omit<Mecanico, 'id'>): Promise<string> {
    try {
      console.log('📝 Intentando crear mecánico:', mecanico);

      const docRef = await addDoc(
        this.getMecanicosCollection(),
        {
          ...mecanico,
          fecha_ingreso: new Date()
        }
      );

      console.log('✅ Mecánico creado exitosamente con ID:', docRef.id);
      return docRef.id;

    } catch (error) {
      console.error('❌ Error al crear mecánico:', error);
      console.error('Código de error:', (error as any).code);
      console.error('Mensaje de error:', (error as any).message);
      throw error;
    }
  }

  /**
   * Actualiza un mecánico existente en Firestore
   */
  public async actualizarMecanico(id: string, mecanico: Partial<Mecanico>): Promise<void> {
    try {
      console.log('🔄 Intentando actualizar mecánico:', { id, ...mecanico });

      await updateDoc(
        doc(this.db, this.COLLECTION_NAME, id),
        mecanico
      );

      console.log('✅ Mecánico actualizado exitosamente:', id);

    } catch (error) {
      console.error('❌ Error al actualizar mecánico:', error);
      console.error('Código de error:', (error as any).code);
      console.error('Mensaje de error:', (error as any).message);
      throw error;
    }
  }

  /**
   * Elimina un mecánico de Firestore
   */
  public async eliminarMecanico(id: string): Promise<void> {
    try {
      console.log('🗑️ Intentando eliminar mecánico:', id);

      await deleteDoc(doc(this.db, this.COLLECTION_NAME, id));

      console.log('✅ Mecánico eliminado exitosamente:', id);

    } catch (error) {
      console.error('❌ Error al eliminar mecánico:', error);
      console.error('Código de error:', (error as any).code);
      console.error('Mensaje de error:', (error as any).message);
      throw error;
    }
  }

  /**
   * Alterna el estado de un mecánico
   */
  public async toggleEstado(id: string, estadoActual: string): Promise<void> {
    try {
      const nuevoEstado = estadoActual === 'activo' ? 'inactivo' : 'activo';
      console.log(`🔄 Cambiando estado de ${id}: ${estadoActual} → ${nuevoEstado}`);

      await this.actualizarMecanico(id, { estado: nuevoEstado });

    } catch (error) {
      console.error('❌ Error al cambiar estado:', error);
      throw error;
    }
  }

  /**
   * Limpia las suscripciones activas
   */
  public limpiar(): void {
    console.log('🧹 Limpiando suscripciones...');
    this.unsubscribes.forEach((unsubscribe, key) => {
      unsubscribe();
      console.log(`✅ Suscripción limpiada: ${key}`);
    });
    this.unsubscribes.clear();
  }

  /**
   * Destructor para limpiar recursos
   */
  ngOnDestroy(): void {
    this.limpiar();
  }
}
