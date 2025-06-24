import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasPageRoutingModule } from './noticias-routing.module';

import { NoticiasPage } from './noticias.page';
import { EncabezadoConLogoComponent } from 'src/app/components/encabezado-con-logo/encabezado-con-logo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasPageRoutingModule,
    EncabezadoConLogoComponent
  ],
  declarations: [NoticiasPage]
})
export class NoticiasPageModule {}
