import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'nueva-incidencia',
    loadComponent: () => import('./pages/nueva-incidencia/nueva-incidencia.page').then( m => m.NuevaIncidenciaPage)
  },
  {
    path: 'listado-incidencias',
    loadComponent: () => import('./pages/listado-incidencias/listado-incidencias.page').then( m => m.ListadoIncidenciasPage)
  },
];
