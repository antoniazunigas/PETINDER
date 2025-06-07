import { Component } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datetime-modal',
  template: `
    <ion-header>
      <ion-toolbar color="success">
        <ion-title>Selecciona fecha</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="cancelar()">Cancelar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-datetime
        [(ngModel)]="fechaSeleccionada"
        presentation="date"
        pickerFormat="DD MMM YYYY"
        displayFormat="DD/MM/YYYY"
        style="width: 100%;"
      ></ion-datetime>

      <ion-button expand="block" color="tertiary" (click)="confirmarFecha()">Confirmar</ion-button>
    </ion-content>
  `,
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class DatetimeModalComponent {
  fechaSeleccionada: string = '';

  constructor(private modalCtrl: ModalController) {}

  cancelar() {
    this.modalCtrl.dismiss();
  }

  confirmarFecha() {
    this.modalCtrl.dismiss({ fecha: this.fechaSeleccionada });
  }
}

