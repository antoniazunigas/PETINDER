import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-clave',
  templateUrl: './clave.page.html',
  styleUrls: ['./clave.page.scss'],
  standalone:false,
})
export class ClavePage {
  nuevaClave: string = '';
  confirmarClave: string = '';

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {}

  async cambiarClave() {
    if (!this.nuevaClave || !this.confirmarClave) {
      this.mostrarToast('Por favor, completa ambos campos');
      return;
    }

    if (this.nuevaClave !== this.confirmarClave) {
      this.mostrarToast('Las contraseñas no coinciden');
      return;
    }

    // lógica para guardar la contraseña nueva 
    this.mostrarToast('Contraseña cambiada con éxito');

    // Luego redirigir a login
    this.navCtrl.navigateRoot('/login');
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}

