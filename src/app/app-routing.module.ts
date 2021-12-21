import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/user/login/login.module').then(m => m.LoginModule),
  },
  {
    path:'dashboard',
    loadChildren: () => import('./modules/user/dashboard/dashboard.module').then(m=>m.DashboardModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
