import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HistoriasFelicesPage } from './historias-felices.page';


import { EncabezadoConLogoComponent } from 'src/app/components/encabezado-con-logo/encabezado-con-logo.component';

@NgModule({
  declarations: [HistoriasFelicesPage],   
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HistoriasFelicesPage,
      },
    ]),
    EncabezadoConLogoComponent             
  ]
})
export class HistoriasFelicesPageModule {}


