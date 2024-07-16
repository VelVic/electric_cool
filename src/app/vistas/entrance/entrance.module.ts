import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrancePageRoutingModule } from './entrance-routing.module';

import { EntrancePage } from './entrance.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrancePageRoutingModule
  ],
  declarations: [EntrancePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EntrancePageModule {}
