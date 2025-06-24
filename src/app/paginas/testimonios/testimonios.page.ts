import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.page.html',
  styleUrls: ['./testimonios.page.scss'],
  standalone: false,
})
export class TestimoniosPage implements OnInit {
  testimonios: any[] = [];

  nombreNuevo: string = '';
  comentarioNuevo: string = '';
  editIndex: number | null = null;

  ngOnInit() {
    this.testimonios = [
      { nombre: 'Paulina Zúñiga', comentario: 'Adoptar a Luna y Mora fue la mejor decisión de mi vida, son mis compañeras fieles, a ellas les encanta correr y jugar juntas.', editable: false },
      { nombre: 'Manuel Retamales', comentario: 'Nunca imaginé cuánto amor puede traer un nuevo miembro a la familia. Mi conejito Mortis se adaptó muy rápido a la nueva casa y sobre todo a mi perro Zeus.🐶', editable: false },
      { nombre: 'Marcela Troncoso', comentario: 'Gracias a Petinder, ahora tenemos un nuevo integrante en el hogar. Ron es un amor, le encanta la playa.', editable: false },
      { nombre: 'Javiera Torres', comentario: 'Adoptamos a un gatito llamado Tomás y estamos felices 😺 ¡Una experiencia hermosa! Me ayudaron en todo el proceso de adopción.', editable: false },
      { nombre: 'Cristóbal Pérez', comentario: 'Recomiendo Petinder a todos los amantes de los animales. ¡Gracias!', editable: false },
    ];
  }

  agregarTestimonio() {
    if (this.nombreNuevo.trim() && this.comentarioNuevo.trim()) {
      this.testimonios.push({
        nombre: this.nombreNuevo.trim(),
        comentario: this.comentarioNuevo.trim(),
        editable: true
      });
      this.nombreNuevo = '';
      this.comentarioNuevo = '';
    } else {
      alert('Por favor, completa ambos campos antes de agregar.');
    }
  }

  iniciarEdicion(index: number) {
    if (!this.testimonios[index].editable) return;
    this.editIndex = index;
    this.nombreNuevo = this.testimonios[index].nombre;
    this.comentarioNuevo = this.testimonios[index].comentario;
  }

  guardarEdicion() {
    if (this.editIndex !== null && this.nombreNuevo.trim() && this.comentarioNuevo.trim()) {
      this.testimonios[this.editIndex].nombre = this.nombreNuevo.trim();
      this.testimonios[this.editIndex].comentario = this.comentarioNuevo.trim();
      this.cancelarEdicion();
    } else {
      alert('Completa ambos campos antes de guardar.');
    }
  }

  cancelarEdicion() {
    this.editIndex = null;
    this.nombreNuevo = '';
    this.comentarioNuevo = '';
  }

  eliminarTestimonio(index: number) {
    if (!this.testimonios[index].editable) return;
    if (confirm('¿Eliminar este testimonio?')) {
      this.testimonios.splice(index, 1);
      if (this.editIndex === index) {
        this.cancelarEdicion();
      }
    }
  }
}






