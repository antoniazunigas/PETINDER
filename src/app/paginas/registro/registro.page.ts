import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone:false,
})
export class RegistroPage {
  usuario = {
    nombre: '',
    correo: '',
    clave: '',
    edad: null
  };

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {}

  async registrarse() {
    if (this.usuario.nombre && this.usuario.correo && this.usuario.clave && this.usuario.edad) {
      // Aquí podrías guardar en localStorage o usar una API
      const toast = await this.toastCtrl.create({
        message: '¡Registrado exitosamente!',
        duration: 2000,
        color: 'success'
      });
      await toast.present();

      // Redirigir al login después de un pequeño tiempo
      setTimeout(() => {
        this.navCtrl.navigateBack('/login');
      }, 2000);
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Por favor completa todos los campos.',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }
}

