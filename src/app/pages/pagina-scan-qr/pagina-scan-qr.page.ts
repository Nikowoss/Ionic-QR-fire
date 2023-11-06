import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-scan-qr',
  templateUrl: './pagina-scan-qr.page.html',
  styleUrls: ['./pagina-scan-qr.page.scss'],
})
export class PaginaScanQrPage implements OnInit {

  constructor(private router:Router) {}

  onClick(ruta:string)
  {
    this.router.navigate(['/scancorrecto'])
  }
  ngOnInit() {
  }

}
