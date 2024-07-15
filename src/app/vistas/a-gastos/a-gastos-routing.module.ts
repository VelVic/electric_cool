import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AGastosPage } from './a-gastos.page';

const routes: Routes = [
  {
    path: '',
    component: AGastosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AGastosPageRoutingModule {}
