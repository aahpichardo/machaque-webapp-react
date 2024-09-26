import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NuevaContrasenaComponent } from './pages/nueva-contrasena/nueva-contrasena.component';
import { PasswordRecoveryComponent } from './pages/password-recovery/password-recovery.component';
import { PasswordRecoveryTokenComponent } from './pages/password-recovery-token/password-recovery-token.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'nueva-contrasena', component: NuevaContrasenaComponent },
  { path: 'password-recovery', component: PasswordRecoveryComponent },
  { path: 'password-recovery-token', component: PasswordRecoveryTokenComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // Redirige a login por defecto
  { path: '**', redirectTo: 'login' }  // Redirige a login si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
