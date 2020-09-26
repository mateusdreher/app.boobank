import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';

import { FormLoginComponent } from './components/form-login/form-login.component';



@NgModule({
  declarations: [FormLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    FormLoginComponent
  ]
})
export class LoginModule { }
