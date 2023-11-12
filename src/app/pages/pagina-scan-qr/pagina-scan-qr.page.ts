import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { FirebaseComponent } from '../../components/firebase/firebase.component';
import { AutentificacionService } from 'src/app/autentificacion.service';
// import {BarcodeScanner} from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-pagina-scan-qr',
  templateUrl: './pagina-scan-qr.page.html',
  styleUrls: ['./pagina-scan-qr.page.scss'],
})
export class PaginaScanQrPage implements OnInit {


  constructor(private storage: Storage,
    private router:Router,
    private autentificacionService: AutentificacionService,
    private firebaseComponent: FirebaseComponent
    ){
    this.initStorage();
  }
  async initStorage() {
    await this.storage.create();
  }


  async guardarStringEnStorage(valor: string) {
    await this.storage.set('miClavee', valor);
  }
  
  onClick(ruta: string) {
    this.firebaseComponent.enviarDatosAFirestore();
    this.router.navigate(['/scancorrecto']);
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

