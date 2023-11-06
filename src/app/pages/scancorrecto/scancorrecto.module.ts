import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScancorrectoPageRoutingModule } from './scancorrecto-routing.module';

import { ScancorrectoPage } from './scancorrecto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScancorrectoPageRoutingModule
  ],
  declarations: [ScancorrectoPage]
})
export class ScancorrectoPageModule {}
