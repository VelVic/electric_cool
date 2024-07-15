import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MipaginaPageRoutingModule } from './mipagina-routing.module';

import { MipaginaPage } from './mipagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MipaginaPageRoutingModule
  ],
  declarations: [MipaginaPage]
})
export class MipaginaPageModule {}
