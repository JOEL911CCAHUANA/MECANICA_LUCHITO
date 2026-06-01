import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./usuarios/login/login.component').then(m => m.LoginComponent),
	},
];
