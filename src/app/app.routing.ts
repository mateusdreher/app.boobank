import { AuthGuard } from './core/auth-guard/auth-guard';
import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewLoginComponent } from './view/components/view-login/view-login.component';
import { ViewHomeComponent } from './view/components/view-home/view-home.component';
import { ViewRegisterComponent } from './view/components/view-register/view-register.component';


const ROOT_ROUTE: Routes = [
    {path: 'register', component: ViewRegisterComponent},
    {path: 'login', component: ViewLoginComponent},
    {path: '', component: ViewHomeComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'login', pathMatch:'full'}
  ]
  
  export const root_route: ModuleWithProviders = RouterModule.forRoot(ROOT_ROUTE);
  