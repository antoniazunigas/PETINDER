import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MascotasAdopcionPage } from './mascotas-adopcion.page';

const routes: Routes = [
  {
    path: '',
    component: MascotasAdopcionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MascotasAdopcionPageRoutingModule {}
