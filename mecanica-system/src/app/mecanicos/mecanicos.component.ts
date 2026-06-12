import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MecanicoService, Mecanico } from './mecanico.service';
import { Unsubscribe } from 'firebase/firestore';

@Component({
  selector: 'app-mecanicos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './mecanicos.component.html',
  styleUrl: './mecanicos.component.css'
})
export class MecanicosComponent implements OnInit, OnDestroy {
  // Propiedades del formulario
  formularioMecanico: FormGroup;
  
  // Propiedades de datos
  mecanicos: Mecanico[] = [];
  mecanicosVisibles = 10;
  busqueda = '';

  // Propiedades de estado
  editando = false;
  guardando = false;
  errorGuardado = '';
  mecanicosVacios = false;

  // ID del mecánico en edición
  mecanicoEnEdicion: string | null = null;

  // Firebase
  private desuscribir: Unsubscribe | null = null;

  constructor(
    private fb: FormBuilder,
    private mecanicoService: MecanicoService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {
    console.log('🚀 Inicializando MecanicosComponent');
    this.formularioMecanico = this.crearFormulario();
  }

  /**
   * Inicializa el componente
   */
  ngOnInit(): void {
    console.log('📋 ngOnInit: Cargando mecánicos...');
    this.cargarMecanicos();
  }

  /**
   * Limpia las suscripciones al destruir el componente
   */
  ngOnDestroy(): void {
    console.log('🗑️ ngOnDestroy: Limpiando suscripciones');
    this.desuscribir?.();
    this.mecanicoService.limpiar();
  }

  /**
   * Crea un FormGroup vacío con validaciones
   */
  private crearFormulario(): FormGroup {
    return this.fb.group({
      nombre_completo: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{7,15}$/)]],
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      especialidad: ['', [Validators.required]],
      estado: ['activo']
    });
  }

  /**
   * Obtiene los mecánicos filtrados y ordenados
   */
  get mecanicosFiltrados(): Mecanico[] {
    if (!this.busqueda.trim()) {
      return this.mecanicos;
    }
    
    const termino = this.busqueda.toLowerCase();
    return this.mecanicos.filter(m =>
      m.nombre_completo.toLowerCase().includes(termino) ||
      m.correo.toLowerCase().includes(termino) ||
      m.telefono.includes(termino) ||
      m.dni.includes(termino) ||
      m.especialidad.toLowerCase().includes(termino)
    );
  }

  /**
   * Obtiene los mecánicos a mostrar en la tabla (con paginación)
   */
  get mecanicosMostrados(): Mecanico[] {
    return this.mecanicosFiltrados.slice(0, this.mecanicosVisibles);
  }

  /**
   * Obtiene la cantidad de mecánicos ocultos
   */
  get quedanMecanicosOcultos(): number {
    return Math.max(this.mecanicosFiltrados.length - this.mecanicosVisibles, 0);
  }

  /**
   * Obtiene la fecha actual formateada
   */
  get fechaPanel(): string {
    return new Intl.DateTimeFormat('es-PE', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    }).format(new Date()).toUpperCase();
  }

  /**
   * Carga los mecánicos desde Firestore en tiempo real
   */
  private cargarMecanicos(): void {
    try {
      console.log('📡 cargarMecanicos: Suscribiendo a cambios en Firestore...');
      
      this.desuscribir = this.mecanicoService.suscribirMecanicos((mecanicos) => {
        this.ngZone.run(() => {
          console.log(`✅ Datos recibidos del servicio: ${mecanicos.length} mecánicos`);
          this.mecanicos = mecanicos;
          this.mecanicosVacios = this.mecanicos.length === 0;
          this.cdr.markForCheck();
        });
      });

    } catch (error) {
      console.error('❌ Error en cargarMecanicos:', error);
      this.errorGuardado = 'Error al cargar los mecánicos. Verifica la consola del navegador.';
    }
  }

  /**
   * Guarda o actualiza un mecánico en Firestore
   */
  async guardarMecanico(): Promise<void> {
    if (this.formularioMecanico.invalid) {
      console.warn('⚠️ Formulario inválido. Campos:', this.formularioMecanico.value);
      this.marcarCamposComoTocados();
      return;
    }

    this.guardando = true;
    this.errorGuardado = '';

    try {
      const datos = this.formularioMecanico.value;
      console.log('💾 guardarMecanico:', { editando: this.editando, datos });

      if (this.editando && this.mecanicoEnEdicion) {
        // Actualizar mecánico existente
        console.log(`🔄 Actualizando mecánico: ${this.mecanicoEnEdicion}`);
        await this.mecanicoService.actualizarMecanico(this.mecanicoEnEdicion, datos);
        console.log('✅ Mecánico actualizado correctamente');
      } else {
        // Crear nuevo mecánico
        console.log('➕ Creando nuevo mecánico');
        const id = await this.mecanicoService.crearMecanico(datos);
        console.log(`✅ Mecánico creado correctamente con ID: ${id}`);
      }

      this.resetearFormulario();
    } catch (error) {
      console.error('❌ Error al guardar mecánico:', error);
      this.errorGuardado = `Error al guardar: ${(error as any).message || 'Error desconocido'}`;
    } finally {
      this.guardando = false;
    }
  }

  /**
   * Carga los datos de un mecánico en el formulario para editar
   */
  editarMecanico(mecanico: Mecanico): void {
    console.log('✏️ Editando mecánico:', mecanico);
    
    this.editando = true;
    this.mecanicoEnEdicion = mecanico.id || null;
    this.errorGuardado = '';

    this.formularioMecanico.patchValue({
      nombre_completo: mecanico.nombre_completo,
      correo: mecanico.correo,
      telefono: mecanico.telefono,
      dni: mecanico.dni,
      especialidad: mecanico.especialidad,
      estado: mecanico.estado
    });

    // Scroll al formulario
    document.querySelector('.formulario-mecanicos')?.scrollIntoView({ behavior: 'smooth' });
  }

  /**
   * Elimina un mecánico de Firestore
   */
  async eliminarMecanico(mecanico: Mecanico): Promise<void> {
    if (!mecanico.id) {
      console.error('❌ No se puede eliminar: ID no disponible');
      return;
    }

    const confirmacion = confirm(`¿Deseas eliminar a ${mecanico.nombre_completo}?`);
    if (!confirmacion) {
      console.log('ℹ️ Eliminación cancelada por el usuario');
      return;
    }

    try {
      console.log(`🗑️ Eliminando mecánico: ${mecanico.id}`);
      await this.mecanicoService.eliminarMecanico(mecanico.id);
      console.log('✅ Mecánico eliminado correctamente');
    } catch (error) {
      console.error('❌ Error al eliminar mecánico:', error);
      this.errorGuardado = `Error al eliminar: ${(error as any).message || 'Error desconocido'}`;
    }
  }

  /**
   * Alterna el estado de un mecánico (activo/inactivo)
   */
  async toggleEstado(mecanico: Mecanico): Promise<void> {
    if (!mecanico.id) {
      console.error('❌ No se puede cambiar estado: ID no disponible');
      return;
    }

    try {
      console.log(`🔄 Cambiando estado de ${mecanico.id}: ${mecanico.estado}`);
      await this.mecanicoService.toggleEstado(mecanico.id, mecanico.estado);
      console.log('✅ Estado actualizado correctamente');
    } catch (error) {
      console.error('❌ Error al cambiar estado:', error);
      this.errorGuardado = `Error al cambiar estado: ${(error as any).message || 'Error desconocido'}`;
    }
  }

  /**
   * Resetea el formulario y el estado de edición
   */
  resetearFormulario(): void {
    console.log('🔄 Reseteando formulario');
    this.formularioMecanico.reset({ estado: 'activo' });
    this.editando = false;
    this.mecanicoEnEdicion = null;
    this.errorGuardado = '';
  }

  /**
   * Marca todos los campos como tocados para mostrar errores
   */
  private marcarCamposComoTocados(): void {
    Object.keys(this.formularioMecanico.controls).forEach(key => {
      this.formularioMecanico.get(key)?.markAsTouched();
    });
  }

  /**
   * Cargar más mecánicos en la tabla
   */
  cargarMas(): void {
    console.log(`📄 Cargando 10 más (actual: ${this.mecanicosVisibles})`);
    this.mecanicosVisibles += 10;
  }

  /**
   * Verifica si un campo tiene error
   */
  tieneError(campo: string, tipoError: string): boolean {
    const control = this.formularioMecanico.get(campo);
    return !!(control && control.hasError(tipoError) && (control.dirty || control.touched));
  }

  /**
   * Obtiene el total de mecánicos activos
   */
  get totalMecanicosActivos(): number {
    return this.mecanicos.filter(m => m.estado === 'activo').length;
  }

  /**
   * Obtiene el total de mecánicos
   */
  get totalMecanicos(): number {
    return this.mecanicos.length;
  }
}
