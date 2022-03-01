import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateRouteGaurd } from './can-activate-route.guard';
import { InWindowComponent } from './in-window/in-window.component';
import { LoginComponent } from './login/login.component';
import { OutWindowComponent } from './out-window/out-window.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path:'',component:SummaryComponent,canActivate:[CanActivateRouteGaurd]},
  {path:'in-window',component:InWindowComponent,canActivate:[CanActivateRouteGaurd]},
  {path:'out-window',component:OutWindowComponent,canActivate:[CanActivateRouteGaurd]},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
