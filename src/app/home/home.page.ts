import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone:false,
})
export class HomePage {
  usuario: string = '';

  fotosMascotas: string[] = [
    '/assets/perro1.jpg',
    '/assets/gato1.jpg',
    '/assets/conejo1.jpg',
    '/assets/perro2.jpg',
    '/assets/tortuga1.jpg'
  ];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.usuario = navigation.extras.state['usuario'] || '';
    }
  }
}






