import { AuthGuard } from './guardias/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AngularFireAuthGuard } from "@angular/fire/compat/auth-guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entrance',
    pathMatch: 'full'
  },
  {
    path: 'entrance',
    loadChildren: () => import('./vistas/entrance/entrance.module').then( m => m.EntrancePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./vistas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./vistas/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./vistas/index/index.module').then( m => m.IndexPageModule),
    /* canActivate: [AngularFireAuthGuard] */
    /* canActivate:[AuthGuard] */
  },
  {
    path: 'a-registros',
    loadChildren: () => import('./vistas/a-registros/a-registros.module').then( m => m.ARegistrosPageModule),
    /* canActivate:[AuthGuard] */
  },
  {
    path: 'a-inventario',
    loadChildren: () => import('./vistas/a-inventario/a-inventario.module').then( m => m.AInventarioPageModule)
  },
  {
    path: 'a-herramientas',
    loadChildren: () => import('./vistas/a-herramientas/a-herramientas.module').then( m => m.AHerramientasPageModule)
  },
  {
    path: 'a-gastos',
    loadChildren: () => import('./vistas/a-gastos/a-gastos.module').then( m => m.AGastosPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
