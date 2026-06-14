import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuModule {
  label: string;
  route: string;
  icon: string;
  active?: boolean;
  badge?: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  modules: MenuModule[] = [
    { label: 'Clientes', route: '/clientes', icon: '👥' },
    { label: 'Órdenes', route: '/ordenes', icon: '🧾' },
    { label: 'Inventario', route: '/inventario', icon: '📦' },
    { label: 'Ventas', route: '/ventas', icon: '💵' },
    { label: 'Mecánicos', route: '/mecanicos', icon: '🛠️' },
    { label: 'Reportes', route: '/reportes', icon: '📊' }
  ];
}
