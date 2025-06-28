// Importamos los decoradores y clases necesarias
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DBTaskService } from '../services/dbtask.service';

// Este decorador hace que el guard esté disponible en toda la app
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  // Inyectamos el servicio de base de datos y el enrutador
  constructor(private dbService: DBTaskService, private router: Router) {}

  // Este método se ejecuta cada vez que se intenta acceder a una ruta protegida
  async canActivate(): Promise<boolean> {
    // Verificamos si hay una sesión activa consultando el servicio
    const activa = await this.dbService.haySesionActiva();

    // Si no hay sesión activa, redirigimos al login
    if (!activa) {
      await this.router.navigate(['/login'], { replaceUrl: true }); // reemplaza la URL actual para evitar volver con el botón atrás
    }

    // Permitimos o denegamos el acceso según el estado de sesión
    return activa;
  }
}




