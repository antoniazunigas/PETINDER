import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';  // Asegúrate que esta ruta es correcta

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'mascotas-adopcion',
    loadChildren: () => import('./paginas/mascotas-adopcion/mascotas-adopcion.module').then(m => m.MascotasAdopcionPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'formulario',
    loadChildren: () => import('./paginas/formulario/formulario.module').then(m => m.FormularioPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'como-adoptar',
    loadChildren: () => import('./paginas/como-adoptar/como-adoptar.module').then(m => m.ComoAdoptarPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'historias-felices',
    loadChildren: () => import('./paginas/historias-felices/historias-felices.module').then(m => m.HistoriasFelicesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'clave',
    loadChildren: () => import('./paginas/clave/clave.module').then(m => m.ClavePageModule),
  },
  {
    path: 'mi-perfil',
    loadChildren: () => import('./paginas/mi-perfil/mi-perfil.module').then( m => m.MiPerfilPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./paginas/noticias/noticias.module').then( m => m.NoticiasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'testimonios',
    loadChildren: () => import('./paginas/testimonios/testimonios.module').then( m => m.TestimoniosPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./paginas/page404/page404.module').then(m => m.Page404PageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


