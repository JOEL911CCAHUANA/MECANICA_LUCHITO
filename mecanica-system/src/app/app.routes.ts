import { Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { InventarioComponent } from './inventario/inventario.component';
import { VentasComponent } from './ventas/ventas.component';
import { MecanicosComponent } from './mecanicos/mecanicos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./usuarios/login/login.component').then(m => m.LoginComponent),
  },
  { path: 'clientes', component: ClientesComponent, canActivate: [authGuard] },
  { path: 'ordenes', component: OrdenesComponent, canActivate: [authGuard] },
  { path: 'inventario', component: InventarioComponent, canActivate: [authGuard] },
  { path: 'ventas', component: VentasComponent, canActivate: [authGuard] },
  { path: 'mecanicos', component: MecanicosComponent, canActivate: [authGuard] },
  { path: 'reportes', component: ReportesComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];
