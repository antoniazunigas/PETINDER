// Importaciones necesarias para que el componente funcione correctamente
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

// Decorador que define los metadatos del componente
@Component({
  selector: 'app-encabezado-con-logo', // Etiqueta personalizada que se usará en las páginas, como <app-encabezado-con-logo>
  templateUrl: './encabezado-con-logo.component.html', // Archivo HTML asociado
  styleUrls: ['./encabezado-con-logo.component.scss'], // Estilos específicos para este componente
  standalone: true, // Permite que este componente sea independiente (no requiere declaración en un módulo)
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class EncabezadoConLogoComponent {
  // Entrada para definir el título que aparecerá en el encabezado
  @Input() titulo: string = '';

  // Entrada para definir la ruta a la que se volverá al presionar la flecha de retroceso
  @Input() rutaAtras: string = '/home';

  // Entrada opcional que permite decidir si se muestra un botón de menú en lugar de una flecha atrás
  @Input() usarMenu: boolean = false;
}



