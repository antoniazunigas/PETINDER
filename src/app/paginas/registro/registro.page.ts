import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { DBTaskService } from '../../services/dbtask.service';

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
    edad: '',
    telefono: '',
    direccion: '',
    region: '',
    comuna: '',
  };

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private db: DBTaskService
  ) {}

  async registrarse() {
    const {
      nombre,
      correo,
      clave,
      edad,
      telefono,
      direccion,
      region,
      comuna,
    } = this.usuario;

    const edadNum = Number(edad);

    // Validación de campos vacíos
    if (
      !nombre ||
      !correo ||
      !clave ||
      !edad ||
      !telefono ||
      !direccion ||
      !region ||
      !comuna
    ) {
      return this.mostrarToast(
        'Por favor completa todos los campos.',
        'danger'
      );
    }

    // Validación de edad
    if (isNaN(edadNum) || edadNum < 18) {
      return this.mostrarToast('Debes ser mayor de 18 años.', 'danger');
    }

    try {
      await this.db.registrarUsuario(
        nombre.trim(),
        correo.trim().toLowerCase(),
        clave,
        edadNum,
        telefono.trim(),
        direccion.trim(),
        region.trim(),
        comuna.trim()
      );
      this.mostrarToast('¡Registrado exitosamente!', 'success');

      // Redirigir al login después de un pequeño delay
      setTimeout(() => {
        this.navCtrl.navigateBack('/login');
      }, 1500);
    } catch (e: any) {
      const mensaje =
        /UNIQUE/.test(e?.message) || /correo.*duplicado/i.test(e?.message)
          ? 'Este correo ya está registrado.'
          : `Error al registrar: ${e.message || 'Intenta nuevamente.'}`;
      this.mostrarToast(mensaje, 'danger');
    }
  }

  private async mostrarToast(message: string, color: string = 'primary') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2500,
      color,
      position: 'top',
    });
    toast.present();
  }
}










