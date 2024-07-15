import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AInventarioPageRoutingModule } from './a-inventario-routing.module';

import { AInventarioPage } from './a-inventario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AInventarioPageRoutingModule
  ],
  declarations: [AInventarioPage]
})
export class AInventarioPageModule {}
