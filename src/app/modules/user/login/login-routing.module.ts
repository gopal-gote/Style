import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    {
        path: '',
        component: LoginComponent,
        pathMatch:'full'
      },
      { path: 'register', component: RegisterComponent},
      { path: 'forgetpassword', component: ForgetPasswordComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
