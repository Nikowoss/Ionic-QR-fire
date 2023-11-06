import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaScanQrPageRoutingModule } from './pagina-scan-qr-routing.module';

import { PaginaScanQrPage } from './pagina-scan-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaScanQrPageRoutingModule

  ],
  declarations: [PaginaScanQrPage]
})
export class PaginaScanQrPageModule {}
