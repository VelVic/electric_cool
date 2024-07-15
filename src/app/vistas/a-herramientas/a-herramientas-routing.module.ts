import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AHerramientasPage } from './a-herramientas.page';

const routes: Routes = [
  {
    path: '',
    component: AHerramientasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AHerramientasPageRoutingModule {}
