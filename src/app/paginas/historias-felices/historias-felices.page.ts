// Importación de módulos necesarios para componentes Ionic, navegación, cámara y funcionalidades comunes
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-historias-felices', // Selector del componente
  templateUrl: './historias-felices.page.html', // Archivo HTML asociado
  styleUrls: ['./historias-felices.page.scss'], // Estilos para la página
  standalone: false, // No es un componente standalone aún
})
export class HistoriasFelicesPage {
  // Lista de imágenes ya cargadas en la galería
  imagenes = [
    'assets/gatoyconejo.jpg',
    'assets/perroytor.jpeg',
    'assets/gato4.jpg',
    'assets/perro4.jpg'
  ];

  // Lista de videos locales para mostrar en la galería
  videos = ['assets/gatos.mp4', 'assets/perros.mp4'];

  // Variable para almacenar temporalmente la foto tomada o subida
  foto: string | null = null;

  // Variable para controlar la rotación de la foto (en grados)
  rotacion: number = 0;

  constructor(private router: Router) {}

  // Función para redirigir a la página de mascotas en adopción
  irAMascotas() {
    this.router.navigate(['/mascotas-adopcion']);
  }

  // Función para abrir la cámara y tomar una foto
  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90, // Calidad de la imagen
      allowEditing: true, // Permite recortar/editar antes de usar
      resultType: CameraResultType.DataUrl, // Devuelve la imagen como base64 (data URL)
      source: CameraSource.Camera, // Fuente: cámara del dispositivo
    });

    // Guarda la imagen capturada
    this.foto = image.dataUrl!;
    this.rotacion = 0; // Reinicia la rotación en caso de que se haya rotado antes
  }

  // Función para subir una foto desde la galería del celular
  async subirDesdeGaleria() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos, // Fuente: galería de fotos
    });

    this.foto = image.dataUrl!;
    this.rotacion = 0;
  }

  // Función que confirma la foto (ya sea tomada o subida) y la agrega al arreglo de imágenes
  confirmarFoto() {
    if (this.foto) {
      this.imagenes.unshift(this.foto); // Inserta la nueva imagen al inicio del arreglo
      this.foto = null; // Limpia la imagen temporal
    }
  }

  // Función que descarta la foto tomada y vuelve al estado inicial
  volverATomar() {
    this.foto = null;
  }

  // Función para rotar la foto seleccionada 90° cada vez que se llama
  rotarFoto() {
    this.rotacion = (this.rotacion + 90) % 360;
  }
}
