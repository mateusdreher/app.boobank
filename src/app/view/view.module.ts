import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { root_route } from './../app.routing';
import { TransationsModule } from '../modules/transations/transations.module';
import { LoginModule } from '../modules/login/login.module';
import { RegisterModule } from '../modules/register/register.module';

import { ViewLoginComponent } from './components/view-login/view-login.component';
import { ViewHomeComponent } from './components/view-home/view-home.component';
import { ViewRegisterComponent } from './components/view-register/view-register.component';
import { ViewComponent } from './components/view/view.component';



@NgModule({
  declarations: [
    ViewLoginComponent, 
    ViewHomeComponent, 
    ViewRegisterComponent, 
    ViewComponent
  ],
  imports: [
    CommonModule,
    TransationsModule,
    LoginModule,
    RegisterModule,
    root_route
  ],
  exports: [
    ViewComponent
  ]
})
export class ViewModule { }
