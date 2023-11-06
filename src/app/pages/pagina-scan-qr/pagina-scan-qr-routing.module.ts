import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaScanQrPage } from './pagina-scan-qr.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaScanQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaScanQrPageRoutingModule {}
