import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historias-felices',
  templateUrl: './historias-felices.page.html',
  styleUrls: ['./historias-felices.page.scss'],
  standalone: false,
})
export class HistoriasFelicesPage {
  constructor(private router: Router) {}
  imagenes = [
    'assets/gatoyconejo.jpg',
    'assets/perroytor.jpeg',
    'assets/gato4.jpg',
    'assets/perro4.jpg'
  ];

  videos = [
    'assets/gatos.mp4',
    'assets/perros.mp4'
  ];

  irAMascotas() {
    this.router.navigate(['/mascotas-adopcion']);
  }
}

