import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ARegistrosPageRoutingModule } from './a-registros-routing.module';

import { ARegistrosPage } from './a-registros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ARegistrosPageRoutingModule
  ],
  declarations: [ARegistrosPage]
})
export class ARegistrosPageModule {}
