import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// Importante: activa los módulos que usarás
SwiperCore.use([Autoplay, Pagination, Navigation]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}



