import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransationsTableComponent } from './components/transations-table/transations-table.component';



@NgModule({
  declarations: [
    TransationsTableComponent
  ],

  imports: [
    CommonModule
  ],

  exports: [
    TransationsTableComponent
  ]
})
export class TransationsModule { }
