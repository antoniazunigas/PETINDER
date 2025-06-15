import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DBTaskService } from '../services/dbtask.service';
import { MenuController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone:false,
})
export class HomePage {
  usuario: string = '';
  fotosMascotas: string[] = [
    '/assets/perro1.jpg', '/assets/gato1.jpg', '/assets/conejo1.jpg',
    '/assets/perro2.jpg', '/assets/tortuga1.jpg'
  ];

  constructor(
    private router: Router,
    private dbService: DBTaskService,
    private menuCtrl: MenuController,
    private alertCtrl: AlertController
  ) {
    const nav = this.router.getCurrentNavigation();
    this.usuario = nav?.extras?.state?.['usuario'] || '';
  }

  async cerrarSesion() {
    const id = await this.dbService.obtenerSesionActiva();
    if (id) await this.dbService.cerrarSesion(id);

    const alert = await this.alertCtrl.create({
      header: 'Sesión cerrada',
      message: 'Has cerrado sesión correctamente.',
      buttons: ['OK'],
    });
    await alert.present();

    this.router.navigate(['/login'], { replaceUrl: true });
  }

  cerrarMenu() {
    this.menuCtrl.close();
  }
}










