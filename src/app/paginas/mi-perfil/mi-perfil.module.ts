import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MiPerfilPage } from './mi-perfil.page';
import { RouterModule, Routes } from '@angular/router';
import { EncabezadoConLogoComponent } from 'src/app/components/encabezado-con-logo/encabezado-con-logo.component';


const routes: Routes = [
  {
    path: '',
    component: MiPerfilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    EncabezadoConLogoComponent
  ],
  declarations: [MiPerfilPage]
})
export class MiPerfilPageModule {}


