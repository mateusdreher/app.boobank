import { NgModule } from '@angular/core';
import { ToastInvalidInputComponent } from './components/toast-invalid-input/toast-invalid-input.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    ToastInvalidInputComponent,
    LoaderComponent
  ],

  imports: [
  ],

  exports: [
    ToastInvalidInputComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
