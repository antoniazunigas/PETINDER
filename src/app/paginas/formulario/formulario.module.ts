import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FormularioPageRoutingModule } from './formulario-routing.module';
import { FormularioPage } from './formulario.page';

import { EncabezadoConLogoComponent } from 'src/app/components/encabezado-con-logo/encabezado-con-logo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormularioPageRoutingModule,
    EncabezadoConLogoComponent  
  ],
  declarations: [
    FormularioPage  
  ]
})
export class FormularioPageModule {}

