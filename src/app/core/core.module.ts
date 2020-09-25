import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
      HeaderComponent,
      FooterComponent
  ],

  imports: [
  ],
  exports: [
      HeaderComponent,
      FooterComponent
  ]
})

export class CoreModule { }
