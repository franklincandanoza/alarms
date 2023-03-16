import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../app/login/login.component'
import { AlarmListComponent } from './alarm-list/alarm-list.component';
import { HomeComponent } from './home/home.component';
import { RecoveryMessageComponent } from './recovery-message/recovery-message.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "confirmacion", component: RecoveryMessageComponent},
  {path: "recuperar", component: RecuperarPasswordComponent},
  {path: "alarmas", component: AlarmListComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
