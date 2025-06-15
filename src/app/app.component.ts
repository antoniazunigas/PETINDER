import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';
import { DBTaskService } from './services/dbtask.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private alertCtrl: AlertController,
    private dbService: DBTaskService
  ) {}

  async cerrarSesion() {
    const id = await this.dbService.obtenerSesionActiva();
    if (id) {
      await this.dbService.cerrarSesion(id);
    }

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

