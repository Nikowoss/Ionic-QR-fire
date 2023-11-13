import { Component, OnInit, inject } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { FirebaseComponent } from '../../components/firebase/firebase.component';
import { AutentificacionService } from 'src/app/autentificacion.service';
import { DataService } from 'src/app/services/data.service';

// import {BarcodeScanner} from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-pagina-scan-qr',
  templateUrl: './pagina-scan-qr.page.html',
  styleUrls: ['./pagina-scan-qr.page.scss'],
})
export class PaginaScanQrPage implements OnInit {

  dato: any;
  asistencia: any = [];
  asistenciaa: any[] = [];
  firebaseSvc = inject(AutentificacionService);

  constructor(private dataService: DataService,
    private router: Router,
    private autentificacionService: AutentificacionService,
    private firebaseComponent: FirebaseComponent) { }

  ionViewDidEnter() {
    this.obtenerDato();
  }

  async guardarDato() {
    await this.dataService.guardarDato('Asistencia Stoarge',);
    this.obtenerDato();
  }
  async obtenerDato() {
    this.dato = await this.dataService.obtenerDato('Asistencia Stoarge');
  }
  onClick(ruta: string) {
    this.firebaseComponent.enviarDatosAFirestore();
    this.router.navigate(['/scancorrecto']);
  }
  async ngOnInit() {
    this.asistencia = await this.firebaseSvc.getAttendances();

    this.asistenciaa = await this.firebaseSvc.getAttendancess();

    //console.log(this.asistenciaa);
    //Hacer el tema de interfaces
    //Hacer buen la base
    //
  }
  

}

