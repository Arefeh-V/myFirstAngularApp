import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ErrorComponent } from './components/error/error.component';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/nav/nav.module').then((module) => module.NavModule),
  },
  { path: 'home', redirectTo: 'home', pathMatch: 'full' }, //default route

  { path: '**', component: ErrorComponent },
];
