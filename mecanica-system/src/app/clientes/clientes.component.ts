import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  addDoc,
  collection,
  deleteField,
  doc,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
  writeBatch
} from 'firebase/firestore';

interface HistorialEntry {
  fecha: string;
  nota: string;
}

interface Cliente {
  id?: string;
  nombre: string;
  dni: string;
  telefono: string;
  motos: string;
  moto?: string;
  placa?: string;
  ultimaVisita: string;
  estado: 'Activo' | 'Inactivo';
  historial?: HistorialEntry[];
}

interface ResumenClientes {
  clientesRegistrados: number;
  motosRegistradas: number;
  actualizadoEn?: string;
}

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit, OnDestroy {
  clientes: Cliente[] = [];
  clientesFiltrados: Cliente[] = [];
  clientesVisibles = 10;
  totalClientesRegistrados = signal(this.leerResumenLocal('clientesRegistrados'));
  totalMotosRegistradas = signal(this.leerResumenLocal('motosRegistradas'));

  busqueda = '';

  modalAbierto = false;
  historialAbierto = false;
  editando = false;
  guardandoCliente = false;
  errorGuardado = '';

  clienteHistorial: Cliente | null = null;
  historialGeneralAbierto = false;

  formCliente: Cliente = this.crearClienteVacio();

  private db = getFirestore();
  private cancelarEscuchaClientes: (() => void) | null = null;
  private cancelarEscuchaResumen: (() => void) | null = null;
  private ultimoResumenGuardado = '';

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.cargarResumenGuardado();
    this.cargarClientes();
  }

  ngOnDestroy(): void {
    this.cancelarEscuchaClientes?.();
    this.cancelarEscuchaResumen?.();
  }

  get clientesMostrados(): Cliente[] {
    return this.clientesFiltrados.slice(0, this.clientesVisibles);
  }

  get quedanClientesOcultos(): number {
    return Math.max(this.clientesFiltrados.length - this.clientesVisibles, 0);
  }

  get fechaPanel(): string {
    return new Intl.DateTimeFormat('es-PE', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(new Date());
  }

  cargarClientes(): void {
    try {
      const clientesQuery = query(collection(this.db, 'clientes'), orderBy('nombre', 'asc'));
      this.cancelarEscuchaClientes?.();
      this.cancelarEscuchaClientes = onSnapshot(
        clientesQuery,
        async (snapshot) => {
          const clientesActuales = snapshot.docs
            .filter(docItem => docItem.id !== 'resumen')
            .map(docItem => this.normalizarCliente(docItem.id, docItem.data()));

          this.ngZone.run(() => {
            this.clientes = clientesActuales;
            if (clientesActuales.length > 0) {
              this.actualizarResumen();
            }
            this.filtrarClientes();
            this.cdr.detectChanges();
          });

          this.eliminarDireccionDeDocumentos(snapshot.docs).catch(error => {
            console.warn('No se pudo limpiar el campo direccion:', error);
          });
        },
        (error) => {
          console.error('Error cargando clientes:', error);
          this.ngZone.run(() => {
            if (this.clientes.length === 0) {
              this.clientesFiltrados = [];
            }
            this.cdr.detectChanges();
          });
        }
      );
    } catch (error) {
      console.error('Error cargando clientes:', error);
      this.ngZone.run(() => {
        this.clientes = [];
        this.clientesFiltrados = [];
        this.cdr.detectChanges();
      });
    }
  }

  cargarResumenGuardado(): void {
    this.cancelarEscuchaResumen?.();
    this.cancelarEscuchaResumen = onSnapshot(
      doc(this.db, 'clientes', 'resumen'),
      (snapshot) => {
        if (!snapshot.exists()) {
          return;
        }

        const resumen = snapshot.data() as Partial<ResumenClientes>;
        this.ngZone.run(() => {
          this.totalClientesRegistrados.set(Number(resumen.clientesRegistrados || 0));
          this.totalMotosRegistradas.set(Number(resumen.motosRegistradas || 0));
          this.ultimoResumenGuardado = `${this.totalClientesRegistrados()}-${this.totalMotosRegistradas()}`;
          this.guardarResumenLocal();
          this.cdr.detectChanges();
        });
      },
      (error) => {
        console.warn('No se pudo leer el resumen de clientes:', error);
      }
    );
  }

  filtrarClientes(): void {
    const texto = this.busqueda.trim().toLowerCase();
    this.clientesVisibles = 10;
    this.clientesFiltrados = this.clientes.filter(cliente =>
      [
        cliente.nombre,
        cliente.dni,
        cliente.telefono,
        cliente.motos
      ].some(valor => valor.toLowerCase().includes(texto))
    );
  }

  mostrarMasClientes(): void {
    this.clientesVisibles += 10;
  }

  abrirModalNuevo(): void {
    this.formCliente = this.crearClienteVacio();
    this.editando = false;
    this.errorGuardado = '';
    this.modalAbierto = true;
  }

  editarCliente(cliente: Cliente): void {
    this.formCliente = {
      ...cliente,
      historial: cliente.historial ? [...cliente.historial] : []
    };
    this.editando = true;
    this.errorGuardado = '';
    this.modalAbierto = true;
  }

  verHistorial(cliente: Cliente): void {
    this.clienteHistorial = cliente;
    this.historialAbierto = true;
  }

  async cambiarEstado(cliente: Cliente): Promise<void> {
    if (!cliente.id) {
      return;
    }

    const nuevoEstado: Cliente['estado'] = cliente.estado === 'Activo' ? 'Inactivo' : 'Activo';

    try {
      await updateDoc(doc(this.db, 'clientes', cliente.id), { estado: nuevoEstado });
    } catch (error) {
      console.error('Error actualizando estado del cliente:', error);
    }
  }

  abrirHistorialGeneral(): void {
    this.historialGeneralAbierto = true;
  }

  cerrarModal(): void {
    this.modalAbierto = false;
    this.editando = false;
    this.errorGuardado = '';
    this.guardandoCliente = false;
    this.formCliente = this.crearClienteVacio();
  }

  cerrarHistorial(): void {
    this.historialAbierto = false;
    this.clienteHistorial = null;
  }

  cerrarHistorialGeneral(): void {
    this.historialGeneralAbierto = false;
  }

  async guardarCliente(): Promise<void> {
    this.errorGuardado = '';

    const errorValidacion = this.validarFormularioCliente();
    if (errorValidacion) {
      this.errorGuardado = errorValidacion;
      return;
    }

    if (this.guardandoCliente) {
      return;
    }

    this.guardandoCliente = true;

    const historialBase = this.formCliente.historial ? [...this.formCliente.historial] : [];
    const registro: Cliente = {
      id: this.formCliente.id,
      nombre: this.formCliente.nombre.trim(),
      dni: this.formCliente.dni.trim(),
      telefono: this.formCliente.telefono.trim(),
      motos: this.formCliente.motos.trim(),
      ultimaVisita: this.formCliente.ultimaVisita || new Date().toISOString().slice(0, 10),
      estado: this.formCliente.estado || 'Activo',
      historial: [
        ...historialBase,
        {
          fecha: new Date().toISOString().slice(0, 10),
          nota: this.editando ? 'Datos actualizados' : 'Cliente registrado'
        }
      ]
    };

    try {
      const { id, ...registroData } = registro;

      if (this.editando && this.formCliente.id) {
        const clienteRef = doc(this.db, 'clientes', this.formCliente.id);
        await updateDoc(clienteRef, registroData);
      } else {
        await addDoc(collection(this.db, 'clientes'), registroData);
      }

      this.ngZone.run(() => {
        this.cerrarModal();
        this.cdr.detectChanges();
      });
    } catch (error) {
      console.error('Error guardando cliente:', error);
      this.ngZone.run(() => {
        this.errorGuardado = this.obtenerMensajeErrorGuardado(error);
        this.cdr.detectChanges();
      });
    } finally {
      this.ngZone.run(() => {
        this.guardandoCliente = false;
        this.cdr.detectChanges();
      });
    }
  }

  obtenerIniciales(nombre: string): string {
    return nombre
      .split(' ')
      .map(palabra => palabra.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  }

  obtenerMotos(cliente: Cliente): string[] {
    return (cliente.motos || cliente.moto || '')
      .split(',')
      .map(moto => moto.trim())
      .filter(Boolean);
  }

  obtenerResumenMoto(cliente: Cliente): string {
    return this.obtenerMotos(cliente).join(', ') || 'Sin moto registrada';
  }

  validarSoloLetras(campo: 'nombre'): void {
    this.formCliente[campo] = this.formCliente[campo].replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ ]/g, '');
  }

  validarSoloNumeros(campo: 'dni' | 'telefono'): void {
    this.formCliente[campo] = this.formCliente[campo].replace(/\D/g, '');
  }

  validarMotos(): void {
    this.formCliente.motos = this.formCliente.motos.replace(/[^A-Za-z0-9ÁÉÍÓÚáéíóúÑñ ,.-]/g, '');
  }

  private validarFormularioCliente(): string {
    const nombre = this.formCliente.nombre.trim();
    const dni = this.formCliente.dni.trim();
    const telefono = this.formCliente.telefono.trim();
    const motos = this.formCliente.motos.trim();

    if (!nombre) {
      return 'Completa el nombre antes de guardar.';
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nombre)) {
      return 'El nombre solo debe contener letras.';
    }

    if (dni && !/^\d{8}$/.test(dni)) {
      return 'El DNI debe tener 8 numeros.';
    }

    if (telefono && !/^\d+$/.test(telefono)) {
      return 'El telefono solo debe contener numeros.';
    }

    if (motos && !/^[A-Za-z0-9ÁÉÍÓÚáéíóúÑñ ,.-]+$/.test(motos)) {
      return 'El campo motos no debe contener caracteres especiales.';
    }

    return '';
  }

  actualizarResumen(guardarEnFirestore = true): void {
    if (this.clientes.length === 0 && (this.totalClientesRegistrados() > 0 || this.totalMotosRegistradas() > 0)) {
      return;
    }

    this.totalClientesRegistrados.set(this.clientes.length);
    this.totalMotosRegistradas.set(this.clientes.reduce((total, cliente) => total + this.obtenerMotos(cliente).length, 0));
    this.guardarResumenLocal();

    if (guardarEnFirestore) {
      this.guardarResumenEnFirestore();
    }
  }

  exportarCSV(): void {
    const encabezados = ['Nombre', 'DNI', 'Telefono', 'Motos', 'Ultima visita', 'Estado'];
    const filas = this.clientesFiltrados.map(cliente => [
      cliente.nombre,
      cliente.dni,
      cliente.telefono,
      cliente.motos,
      cliente.ultimaVisita,
      cliente.estado
    ]);
    const csv = [encabezados, ...filas]
      .map(fila => fila.map(valor => `"${String(valor).replace(/"/g, '""')}"`).join(','))
      .join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const enlace = document.createElement('a');
    enlace.href = URL.createObjectURL(blob);
    enlace.download = 'clientes.csv';
    enlace.click();
    URL.revokeObjectURL(enlace.href);
  }

  exportarPDF(): void {
    window.print();
  }

  private normalizarCliente(id: string, data: unknown): Cliente {
    const cliente = data as Partial<Cliente>;
    const motos = cliente.motos || [cliente.moto, cliente.placa].filter(Boolean).join(' ');

    return {
      id,
      nombre: cliente.nombre || '',
      dni: cliente.dni || '',
      telefono: cliente.telefono || '',
      motos,
      moto: cliente.moto,
      placa: cliente.placa,
      ultimaVisita: cliente.ultimaVisita || '',
      estado: cliente.estado || 'Activo',
      historial: cliente.historial || []
    };
  }

  private leerResumenLocal(campo: 'clientesRegistrados' | 'motosRegistradas'): number {
    const resumenLocal = localStorage.getItem('clientesResumen');

    if (!resumenLocal) {
      return 0;
    }

    try {
      const resumen = JSON.parse(resumenLocal) as Partial<ResumenClientes>;
      return Number(resumen[campo] || 0);
    } catch {
      return 0;
    }
  }

  private guardarResumenLocal(): void {
    if (this.totalClientesRegistrados() === 0 && this.totalMotosRegistradas() === 0) {
      return;
    }

    localStorage.setItem('clientesResumen', JSON.stringify({
      clientesRegistrados: this.totalClientesRegistrados(),
      motosRegistradas: this.totalMotosRegistradas()
    }));
  }

  private guardarResumenEnFirestore(): void {
    const resumen = {
      clientesRegistrados: this.totalClientesRegistrados(),
      motosRegistradas: this.totalMotosRegistradas(),
      actualizadoEn: new Date().toISOString()
    };
    const resumenClave = `${resumen.clientesRegistrados}-${resumen.motosRegistradas}`;

    if (this.ultimoResumenGuardado === resumenClave) {
      return;
    }

    this.ultimoResumenGuardado = resumenClave;
    setDoc(doc(this.db, 'clientes', 'resumen'), resumen, { merge: true }).catch(error => {
      console.warn('No se pudo guardar el resumen de clientes:', error);
      this.ultimoResumenGuardado = '';
    });
  }

  private async eliminarDireccionDeDocumentos(docs: Array<{ ref: ReturnType<typeof doc>; data: () => unknown }>): Promise<void> {
    const docsConDireccion = docs.filter(docItem => {
      const data = docItem.data() as { direccion?: unknown };
      return Object.prototype.hasOwnProperty.call(data, 'direccion');
    });

    if (!docsConDireccion.length) {
      return;
    }

    const batch = writeBatch(this.db);
    docsConDireccion.forEach(docItem => {
      batch.update(docItem.ref, { direccion: deleteField() });
    });
    await batch.commit();
  }

  private obtenerMensajeErrorGuardado(error: unknown): string {
    const firebaseError = error as { code?: string; message?: string };

    if (firebaseError.code === 'permission-denied') {
      return 'Firebase bloquea el guardado. Publica en Firestore Rules la regla temporal: allow read, write: if true;';
    }

    if (firebaseError.code === 'unavailable') {
      return 'No hay conexion con Firebase. Revisa internet e intenta otra vez.';
    }

    return firebaseError.message || 'No se pudo guardar el cliente. Intenta nuevamente.';
  }

  private crearClienteVacio(): Cliente {
    return {
      nombre: '',
      dni: '',
      telefono: '',
      motos: '',
      ultimaVisita: '',
      estado: 'Activo',
      historial: []
    };
  }
}
