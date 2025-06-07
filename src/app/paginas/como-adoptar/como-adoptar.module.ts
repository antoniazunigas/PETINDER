import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComoAdoptarPageRoutingModule } from './como-adoptar-routing.module';

import { ComoAdoptarPage } from './como-adoptar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComoAdoptarPageRoutingModule
  ],
  declarations: [ComoAdoptarPage]
})
export class ComoAdoptarPageModule {}
