import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-encabezado-con-logo',
  templateUrl: './encabezado-con-logo.component.html',
  styleUrls: ['./encabezado-con-logo.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class EncabezadoConLogoComponent {
  @Input() titulo: string = '';
  @Input() rutaAtras: string = '/home'; 
  @Input() usarMenu: boolean = false;  
}



