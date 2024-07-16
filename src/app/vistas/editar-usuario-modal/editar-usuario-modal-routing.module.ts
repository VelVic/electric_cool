import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarUsuarioModalPage } from './editar-usuario-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EditarUsuarioModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarUsuarioModalPageRoutingModule {}
