import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NuevaContrasenaComponent } from './pages/nueva-contrasena/nueva-contrasena.component';
import { PasswordRecoveryComponent } from './pages/password-recovery/password-recovery.component';
import { PasswordRecoveryTokenComponent } from './pages/password-recovery-token/password-recovery-token.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NuevaContrasenaComponent,
    PasswordRecoveryComponent,
    PasswordRecoveryTokenComponent,
    RegisterComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
