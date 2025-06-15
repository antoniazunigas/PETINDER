import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DBTaskService } from '../services/dbtask.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private dbService: DBTaskService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const activa = await this.dbService.haySesionActiva();
    if (!activa) {
      await this.router.navigate(['/login'], { replaceUrl: true });
    }
    return activa;
  }
}



