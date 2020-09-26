import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { FormRegisterComponent } from './components/form-register/form-register.component';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    FormRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    FormRegisterComponent
  ]
})
export class RegisterModule { }
