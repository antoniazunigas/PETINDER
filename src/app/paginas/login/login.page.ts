// Importación de los módulos necesarios desde Angular y Ionic
import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'; // Para la navegación entre páginas
import { AlertController } from '@ionic/angular'; // Para mostrar alertas al usuario

// Decorador que define este componente como parte de la app
@Component({
  selector: 'app-login', // Selector del componente
  templateUrl: './login.page.html', // Ruta a la plantilla HTML
  styleUrls: ['./login.page.scss'], // Ruta a la hoja de estilos
  standalone: false, // Especifica si el componente es independiente
})
export class LoginPage {
  // Propiedades para almacenar los datos ingresados por el usuario
  nombreUsuario: string = '';
  correo: string = '';
  password: string = '';

  // Constructor que inyecta el Router para navegar y el AlertController para mostrar mensajes
  constructor(private router: Router, private alertCtrl: AlertController) {}

  // Método que se ejecuta al hacer clic en el botón "Ingresar"
  async ingresar() {
    // Validación: el nombre de usuario no puede estar vacío
    if (this.nombreUsuario.trim() === '') {
      this.presentAlert('Error', 'Ingresa tu nombre de usuario.');
      return;
    }

    // Validación: el correo debe tener formato válido
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.correo);
    if (!correoValido) {
      this.presentAlert('Error', 'Ingresa un correo electrónico válido.');
      return;
    }

    // Validación: la contraseña debe tener al menos una mayúscula, un número y mínimo 6 caracteres
    const passwordValida = /^(?=.*[A-Z])(?=.*\d).{6,}$/.test(this.password);
    if (!passwordValida) {
      this.presentAlert('Error', 'La contraseña debe tener al menos una mayúscula, un número y mínimo 6 caracteres.');
      return;
    }

    // Si todas las validaciones son correctas, se navega a la página 'home' enviando el nombre del usuario
    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.nombreUsuario
      }
    };
    this.router.navigate(['/home'], navigationExtras); // Redirección con datos adjuntos
  }

  // Método auxiliar para mostrar alertas personalizadas
  async presentAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present(); // Muestra el alert
  }

  // Método llamado si el usuario hace clic en "Olvidé mi contraseña"
  olvideContrasena() {
    this.presentAlert('Recuperar contraseña', 'Envíanos un correo a soporte@petinder.com para recuperar tu cuenta.');
  }

  // Método que redirige al usuario a la página de registro (puedes cambiar el alert por navegación real)
  registrarse() {
    // Esta línea puede reemplazarse por: this.router.navigate(['/registro']);
    this.presentAlert('Registro', 'Funcionalidad de registro aún en desarrollo.');
  }
}





