import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DBTaskService } from '../../services/dbtask.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false,
})
export class LoginPage {
  correo: string = '';
  password: string = '';

  constructor(
    private db: DBTaskService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  private esCorreoValido(correo: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }

  async ingresar(): Promise<void> {
    if (!this.correo || !this.password) {
      return this.presentAlert('Error', 'Debes completar todos los campos.');
    }

    if (!this.esCorreoValido(this.correo)) {
      return this.presentAlert('Error', 'Ingresa un correo electrónico válido.');
    }

    try {
      const usuario = await this.db.validarUsuario(this.correo, this.password);

      if (!usuario) {
        return this.presentAlert('Error', 'Usuario o contraseña incorrectos.');
      }

      await this.db.iniciarSesion(usuario.id);

      const extras: NavigationExtras = {
        state: { usuario: usuario.nombre }
      };

      this.router.navigate(['/home'], extras);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      this.presentAlert('Error', 'Ocurrió un problema al iniciar sesión.');
    }
  }

  async presentAlert(header: string, message: string): Promise<void> {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  registrarse(): void {
    this.router.navigate(['/registro']);
  }

  olvideContrasena(): void {
    this.router.navigate(['/clave']);
  }
}














