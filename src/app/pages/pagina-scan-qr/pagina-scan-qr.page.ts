import { Usuario } from './../../interfaces/usuario';
import { Component, OnInit, inject } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { FirebaseComponent } from '../../components/firebase/firebase.component';
import { AutentificacionService } from 'src/app/autentificacion.service';
import { DataService } from 'src/app/services/data.service';
import { Asistencia } from 'src/app/interfaces/asistencia';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx'


@Component({
  selector: 'app-pagina-scan-qr',
  templateUrl: './pagina-scan-qr.page.html',
  styleUrls: ['./pagina-scan-qr.page.scss'],
})
export class PaginaScanQrPage implements OnInit {

  dato: any;
  qr: any;
  private path = 'Asistencia/';

  nuevaAsis: Asistencia = {
    Asignatura: '',
    estudiante: '',
    fecha: new Date,
    asistencia: 'Presente'
  }
  texto: string = ''

  constructor(private database: DataService,
    private barcodescanner: BarcodeScanner,
    private router: Router,
    private storage: Storage,
    private autentificacionService: AutentificacionService,
    private firebaseComponent: FirebaseComponent) { }

  ionViewDidEnter() {
    this.obtenerDato();
  }

  async obtenerDato() {
    this.dato = await this.database.obtenerDato('Asistencia Stoarge');
  }

  async guardarasis() {
    const userData = await this.storage.get('miClave');
    this.barcodescanner.scan().then(barcodedata => {
      console.log("Scaneando...", barcodedata);
      if (userData && userData.state && userData.state.user && userData.state.user.email) {
        this.qr = barcodedata.text
        this.texto = (JSON.stringify(barcodedata));
        const userEmail = userData.state.user.email;
        console.log('Correo:', userEmail);
        const id = this.database.getID();
        this.nuevaAsis.estudiante = userEmail;
        this.nuevaAsis.Asignatura = this.qr;
        this.database.crearDoc(this.nuevaAsis, this.path, id)
        this.database.guardarDato('Asistencia Stoarge',);
        this.obtenerDato();
        this.router.navigate(['/scancorrecto']);
      } else {
        console.error('Nota el correo ql');
      }

    }).catch(err => {
      console.log("ERROR AL ESCANEAR!!!!");
    })


  }
  ngOnInit() {

  }


}

