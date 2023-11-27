// pagina-scan-qr.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaginaScanQrPageRoutingModule } from './pagina-scan-qr-routing.module';
import { PaginaScanQrPage } from './pagina-scan-qr.page';
import { FirebaseComponent } from '../../components/firebase/firebase.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaScanQrPageRoutingModule,
  ],
  declarations: [PaginaScanQrPage, FirebaseComponent], 
})
export class PaginaScanQrPageModule {}