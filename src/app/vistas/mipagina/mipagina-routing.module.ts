import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MipaginaPage } from './mipagina.page';

const routes: Routes = [
  {
    path: '',
    component: MipaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MipaginaPageRoutingModule {}
