import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
  standalone: false,
})
export class NoticiasPage implements OnInit {
  noticias: any[] = [];
  imagenNoDisponible = 'assets/no.jpg'; // Ruta local a imagen alternativa

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.noticiasService.obtenerNoticias().subscribe(
      (res: any) => {
        this.noticias = res.articles;
      },
      error => {
        console.error('❌ Error al cargar noticias:', error);
      }
    );
  }

  onImageError(event: any) {
    event.target.src = this.imagenNoDisponible;
  }
}


