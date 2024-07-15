import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AInventarioPage } from './a-inventario.page';

const routes: Routes = [
  {
    path: '',
    component: AInventarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AInventarioPageRoutingModule {}
