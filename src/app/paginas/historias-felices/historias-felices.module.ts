import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HistoriasFelicesPage } from './historias-felices.page';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HistoriasFelicesPage,
      },
    ]),
    HistoriasFelicesPage // 
  ],
})
export class HistoriasFelicesPageModule {}

