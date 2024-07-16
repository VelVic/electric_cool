import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarUsuarioModalPageRoutingModule } from './editar-usuario-modal-routing.module';

import { EditarUsuarioModalPage } from './editar-usuario-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarUsuarioModalPageRoutingModule
  ],
  declarations: [EditarUsuarioModalPage]
})
export class EditarUsuarioModalPageModule {}
