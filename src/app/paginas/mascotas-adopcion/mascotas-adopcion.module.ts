import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MascotasAdopcionPageRoutingModule } from './mascotas-adopcion-routing.module';
import { MascotasAdopcionPage } from './mascotas-adopcion.page';
import { EncabezadoConLogoComponent } from 'src/app/components/encabezado-con-logo/encabezado-con-logo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MascotasAdopcionPageRoutingModule,
    EncabezadoConLogoComponent 
  ],
  declarations: [MascotasAdopcionPage]
})
export class MascotasAdopcionPageModule {}

