import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
          return import('./components/home/home.component').then((m) => m.HomeComponent);
        },
      },
      {
        path: 'todos',
        loadComponent: () => {
          return import('./components/todos/todos.component').then((m) => m.TodosComponent);
        },
      },
      {
        path: 'ngrxcounter',
        loadComponent: () => {
          return import('./components/ngrxcounter/ngrxcounter.component').then((m) => m.NgrxCounterComponent);
        },
      },
      
];