import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegisterComponent } from '../register/register.component';
import { NavComponent } from './nav.component';
import { AuthGuardService } from '../../../shared/services/loginService/auth-guard-service.service';

export const navRoutes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardService],
      },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'profile/:id',
        component: ProfileComponent,
        canActivate: [AuthGuardService],
      },
    ],
  },
];
