import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historias-felices',
  templateUrl: './historias-felices.page.html',
  styleUrls: ['./historias-felices.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
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

  testimonios = [
  {
    nombre: 'Paulina Zúñiga',
    mensaje: 'Adoptar a Luna y Mora fue la mejor decisión de mi vida, son mis compañeras fieles, a ellas les encanta correr y jugar juntas.'
  },
  {
    nombre: 'Manuel Retamales',
    mensaje: 'Nunca imaginé cuánto amor puede traer un nuevo miembro a la familia. Mi conejito Mortis se adaptó muy rápido a la nueva casa y sobre todo a mi perro Zeus.'
  },
  {
    nombre: 'Marcela Troncoso',
    mensaje: 'Gracias a Petinder, ahora tenemos un nuevo integrante en el hogar. Ron es un amor, le encanta la playa.'
  }
];

  irAMascotas() {
    this.router.navigate(['/mascotas-adopcion']);
  }
}

