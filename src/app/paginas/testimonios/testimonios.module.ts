import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TestimoniosPageRoutingModule } from './testimonios-routing.module';
import { TestimoniosPage } from './testimonios.page';


import { EncabezadoConLogoComponent } from 'src/app/components/encabezado-con-logo/encabezado-con-logo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestimoniosPageRoutingModule,
    EncabezadoConLogoComponent 
  ],
  declarations: [TestimoniosPage]
})
export class TestimoniosPageModule {}

