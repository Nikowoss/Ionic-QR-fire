import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scancorrecto',
  templateUrl: './scancorrecto.page.html',
  styleUrls: ['./scancorrecto.page.scss'],
})
export class ScancorrectoPage implements OnInit {

  constructor(private router:Router) {}

  onClick(ruta:string)
  {
    this.router.navigate(['/'+ruta])
  }

  ngOnInit() {
  }

}
