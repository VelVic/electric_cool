import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AGastosPageRoutingModule } from './a-gastos-routing.module';

import { AGastosPage } from './a-gastos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AGastosPageRoutingModule
  ],
  declarations: [AGastosPage]
})
export class AGastosPageModule {}
