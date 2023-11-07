import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scancorrecto',
  templateUrl: './scancorrecto.page.html',
  styleUrls: ['./scancorrecto.page.scss'],
})
export class ScancorrectoPage implements OnInit {

  constructor(private storage: Storage,private router:Router){
    this.obtenerValorDelStorage();
  }

  onClick(ruta:string)
  {
    this.router.navigate(['/'+ruta])
  }

  ngOnInit() {
  }

  valorGuardado: any;

  async obtenerValorDelStorage() {
    const valor = await this.storage.get('miClavee');
    if (valor !== null) {
      this.valorGuardado = valor;
      console.log('Asistencia:', valor);
    } else {
      console.log('No se encontró ningún valor con la clave proporcionada en el storage.');
    }
  }

}
