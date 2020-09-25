import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { root_route } from './../app.routing';
import { TransationsModule } from '../modules/transations/transations.module';
import { LoginModule } from '../modules/login/login.module';

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
    root_route
  ],
  exports: [
    ViewComponent
  ]
})
export class ViewModule { }
