import { Component } from '@angular/core';

@Component({
  selector: 'app-mascotas-adopcion',
  templateUrl: './mascotas-adopcion.page.html',
  styleUrls: ['./mascotas-adopcion.page.scss'],
  standalone:false
})
export class MascotasAdopcionPage {

  mascotas = [
    {
      nombre: 'Luna',
      edad: '2 años',
      genero: 'Hembra',
      descripcion: 'Muy juguetona, le encanta correr y le encantan los niños.',
      imagen: 'assets/perro2.jpg'
    },
    {
      nombre: 'Obito',
      edad: '3 años',
      genero: 'Macho',
      descripcion: 'Tranquilo y protector, ideal para familia.',
      imagen: 'assets/perro1.jpg'
    },
    {
      nombre: 'Piera',
      edad: '5 años',
      genero: 'Hembra',
      descripcion: 'Gatita tranquila y muy cariñosa.',
      imagen: 'assets/gato1.jpg'
    },
    {
      nombre: 'Rocky',
      edad: '4 años',
      genero: 'Macho',
      descripcion: 'Amigable con otros animales y personas, le encanta explorar',
      imagen: 'assets/gato2.jpg'
    },
    {
      nombre: 'Fresa',
      edad: '6 meses',
      genero: 'Hembra',
      descripcion: 'Conejita tranquila que ama los abrazos.',
      imagen: 'assets/conejo1.jpg'
    },
    {
      nombre: 'Limón',
      edad: '2 años',
      genero: 'Macho',
      descripcion: 'Tortuga aventurera, le encanta conocer los lugares nuevos.',
      imagen: 'assets/tortuga1.jpg'
    },
    {
      nombre: 'Milo',
      edad: '3 años',
      genero: 'Macho',
      descripcion: 'Gato independiente pero cariñoso.',
      imagen: 'assets/gato3.jpg'
    },
    {
      nombre: 'Bella',
      edad: '7 años',
      genero: 'Hembra',
      descripcion: 'Perra adulta, ideal para compañía tranquila.',
      imagen: 'assets/perro3.jpg'
    },
    {
      nombre: 'Rin',
      edad: '3 años',
      genero: 'Hembra',
      descripcion: 'Gallina muy inteligente que le encantan las verduras.',
      imagen: 'assets/gallina.jpeg'
    },
    {
      nombre: 'Lila',
      edad: '3 años',
      genero: 'Hembra',
      descripcion: 'Eriza muy dócil y curiosa.',
      imagen: 'assets/erizo.jpeg'
    }
  ];

  constructor() { }

}

