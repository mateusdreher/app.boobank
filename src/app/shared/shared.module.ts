import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { ToastInvalidInputComponent } from './components/toast-invalid-input/toast-invalid-input.component';

@NgModule({
  declarations: [
    CardComponent,
    ToastInvalidInputComponent
  ],

  imports: [
  ],

  exports: [
    CardComponent,
    ToastInvalidInputComponent
  ]
})
export class SharedModule { }
