import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-inferior',
  templateUrl: './menu-inferior.component.html',
  styleUrls: ['./menu-inferior.component.scss'],
})
export class MenuInferiorComponent  {
  constructor(private router: Router) {}

  irAPaginaScanQR() {
    this.router.navigate(['pagina-scan-qr']);
  }
}