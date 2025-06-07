import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MascotasAdopcionPageRoutingModule } from './mascotas-adopcion-routing.module';

import { MascotasAdopcionPage } from './mascotas-adopcion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MascotasAdopcionPageRoutingModule
  ],
  declarations: [MascotasAdopcionPage]
})
export class MascotasAdopcionPageModule {}
