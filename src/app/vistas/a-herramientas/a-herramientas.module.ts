import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AHerramientasPageRoutingModule } from './a-herramientas-routing.module';

import { AHerramientasPage } from './a-herramientas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AHerramientasPageRoutingModule
  ],
  declarations: [AHerramientasPage]
})
export class AHerramientasPageModule {}
