import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'todos',
    loadComponent: () => {
      return import('./totos/totos.component').then((m) => m.TotosComponent);
    },
  },
];
