import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'estudiante',
    pathMatch: 'full'
  },

  {
    path: 'recuperar-contra',
    loadChildren: () => import('./pages/recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },

  {
    path: 'estudiante',
    loadChildren: () => import('./pages/estudiante/estudiante.module').then( m => m.EstudiantePageModule)
  },
  {
    path: 'pagina-scan-qr',
    loadChildren: () => import('./pages/pagina-scan-qr/pagina-scan-qr.module').then( m => m.PaginaScanQrPageModule)
  },
  {
    path: 'perfil-estudiante',
    loadChildren: () => import('./pages/perfil-estudiante/perfil-estudiante.module').then( m => m.PerfilEstudiantePageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./pages/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
  },
  {
    path: 'scancorrecto',
    loadChildren: () => import('./pages/scancorrecto/scancorrecto.module').then( m => m.ScancorrectoPageModule)
  },  {
    path: 'crear',
    loadChildren: () => import('./pages/crear/crear.module').then( m => m.CrearPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
