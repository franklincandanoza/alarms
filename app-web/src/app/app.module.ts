import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { RegisterButtonComponent } from './components/register-button/register-button.component';
import { CloseSessioButtonComponent } from './components/close-sessio-button/close-sessio-button.component';
import { HeaderCloseSessionComponent } from './components/header-close-session/header-close-session.component';
import { AlarmListComponent } from './alarm-list/alarm-list.component';
import { AlarmCardComponent } from './components/alarm-card/alarm-card.component';
import { AlarmToggleComponent } from './components/alarm-toggle/alarm-toggle.component';
import { AlarmMenuComponent } from './components/alarm-menu/alarm-menu.component';
import {MatSidenavModule} from  '@angular/material/sidenav';
import {MatCardModule} from  '@angular/material/card';
import {MatDividerModule} from  '@angular/material/divider';
import {MatDialogModule} from  '@angular/material/dialog';
import {MatGridListModule} from  '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { RegisterComponent } from './register/register.component';
import {MatButtonModule} from '@angular/material/button';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RecoveryMessageComponent } from './recovery-message/recovery-message.component';
import { HeaderLoginComponent } from './components/header-login/header-login.component';
import { HomeComponent } from './home/home.component';
import { CreatedAccountComponent } from './created-account/created-account.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LoginButtonComponent,
    RegisterButtonComponent,
    CloseSessioButtonComponent,
    HeaderCloseSessionComponent,
    AlarmListComponent,
    AlarmCardComponent,
    AlarmToggleComponent,
    AlarmMenuComponent,
    RegisterComponent,
    RecuperarPasswordComponent,
    MenuPrincipalComponent,
    RecoveryMessageComponent,
    HeaderLoginComponent,
    HomeComponent,
    CreatedAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
