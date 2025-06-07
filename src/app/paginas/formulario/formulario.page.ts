import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule, ModalController, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatetimeModalComponent } from './datetime-modal.component';
import { Router } from '@angular/router'; // ⬅️ Importación necesaria para navegar

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, FormsModule, CommonModule],
})
export class FormularioPage {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private router: Router // ⬅️ Inyección del Router
  ) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{9,12}$/)]],
      fechaNacimiento: ['', [Validators.required, this.mayorDeEdadValidator]],
      region: ['', Validators.required],
      comuna: ['', Validators.required],
      direccion: ['', Validators.required],
      aceptaTerminos: [false, Validators.requiredTrue],
    });
  }

  // ✅ Método para navegar a /como-adoptar
  irAComoAdoptar() {
    this.router.navigate(['/como-adoptar']);
  }

  // Validación de mayoría de edad
  mayorDeEdadValidator = (control: any) => {
    if (!control.value) return null;
    const nacimiento = new Date(control.value);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const cumpleEsteAnio = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());
    if (hoy < cumpleEsteAnio) {
      edad--;
    }
    return edad >= 18 ? null : { menorDeEdad: true };
  };

  async seleccionarFecha() {
    const modal = await this.modalCtrl.create({
      component: DatetimeModalComponent,
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data?.fecha) {
      this.formulario.get('fechaNacimiento')?.setValue(data.fecha);
    }
  }

  async enviarFormulario() {
    if (this.formulario.valid) {
      const toast = await this.toastCtrl.create({
        message: 'Formulario enviado exitosamente, prepárate para que llegue tu mejor compañero 🐾',
        duration: 4000,
        color: 'success',
        position: 'top',
        icon: 'checkmark-circle',
      });
      await toast.present();
      this.formulario.reset();
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Por favor, completa todos los campos correctamente.',
        duration: 3000,
        color: 'danger',
        position: 'top',
        icon: 'alert-circle',
      });
      await toast.present();
    }
  }
}














