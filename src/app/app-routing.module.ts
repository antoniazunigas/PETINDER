import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'mascotas-adopcion',
    loadChildren: () => import('./paginas/mascotas-adopcion/mascotas-adopcion.module').then( m => m.MascotasAdopcionPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./paginas/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'como-adoptar',
    loadChildren: () => import('./paginas/como-adoptar/como-adoptar.module').then( m => m.ComoAdoptarPageModule)
  },
  {
    path: 'historias-felices',
    loadChildren: () => import('./paginas/historias-felices/historias-felices.module').then( m => m.HistoriasFelicesPageModule)
  },
  {
    path: 'clave',
    loadChildren: () => import('./paginas/clave/clave.module').then( m => m.ClavePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
