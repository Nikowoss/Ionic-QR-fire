import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScancorrectoPage } from './scancorrecto.page';

const routes: Routes = [
  {
    path: '',
    component: ScancorrectoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScancorrectoPageRoutingModule {}
