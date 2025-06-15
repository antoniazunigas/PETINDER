import { Component, OnInit } from '@angular/core';
import { DBTaskService } from '../../services/dbtask.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
  standalone:false,
})
export class MiPerfilPage implements OnInit {
  usuario: any = {
    id: null,
    nombre: '',
    correo: '',
    edad: null,
    telefono: '',
    direccion: '',
    region: '',
    comuna: ''
  };

  editando: boolean = false;

  constructor(private dbTaskService: DBTaskService) {}

  async ngOnInit() {
    const idUsuario = await this.dbTaskService.obtenerSesionActiva();
    if (idUsuario) {
      const usuario = await this.dbTaskService.obtenerUsuarioPorId(idUsuario);
      if (usuario) {
        this.usuario = { ...usuario };
      }
    }
  }

  activarEdicion() {
    this.editando = true;
  }

  async guardarCambios() {
    try {
      await this.dbTaskService.actualizarUsuario(this.usuario);
      alert('Datos actualizados correctamente');
      this.editando = false;
    } catch (error: any) {
      console.error('Error al actualizar:', error);
      alert('Error al actualizar datos: ' + error.message);
    }
  }
}








