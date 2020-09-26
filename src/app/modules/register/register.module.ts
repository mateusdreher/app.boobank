import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormRegisterComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RegisterModule { }
