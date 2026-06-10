import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mecanica-system';
  showHeader = false;

  constructor(private router: Router) {
    this.updateHeaderVisibility(router.url);

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.updateHeaderVisibility(event.urlAfterRedirects));
  }

  private updateHeaderVisibility(url: string): void {
    const normalized = url === '' ? '/' : url;
    this.showHeader = normalized !== '/';
  }
}
