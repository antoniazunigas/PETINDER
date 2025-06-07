import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriasFelicesPage } from './historias-felices.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriasFelicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriasFelicesPageRoutingModule {}
