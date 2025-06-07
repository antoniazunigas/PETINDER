import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComoAdoptarPage } from './como-adoptar.page';

const routes: Routes = [
  {
    path: '',
    component: ComoAdoptarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComoAdoptarPageRoutingModule {}
