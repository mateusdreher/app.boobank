import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { BalanceComponent } from './components/balance/balance.component';
import { ComparativeComponent } from './components/comparative/comparative.component';
import { TipsComponent } from './components/tips/tips.component';
import { DashComponent } from './components/dash/dash.component';



@NgModule({
  declarations: [
    BalanceComponent, 
    ComparativeComponent, 
    TipsComponent, 
    DashComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DashComponent
  ]
})
export class DashboardModule { }
