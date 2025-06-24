import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComoAdoptarPageRoutingModule } from './como-adoptar-routing.module';

import { ComoAdoptarPage } from './como-adoptar.page';
import { EncabezadoConLogoComponent } from 'src/app/components/encabezado-con-logo/encabezado-con-logo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComoAdoptarPageRoutingModule,
    EncabezadoConLogoComponent
  ],
  declarations: [ComoAdoptarPage]
})
export class ComoAdoptarPageModule {}
