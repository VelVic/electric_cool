import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ARegistrosPage } from './a-registros.page';

const routes: Routes = [
  {
    path: '',
    component: ARegistrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ARegistrosPageRoutingModule {}
