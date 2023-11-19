import { Usuario } from './../../interfaces/usuario';
import { Component, OnInit, inject } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { FirebaseComponent } from '../../components/firebase/firebase.component';
import { AutentificacionService } from 'src/app/autentificacion.service';
import { DataService } from 'src/app/services/data.service';
import { Asistencia } from 'src/app/interfaces/asistencia';

// import {BarcodeScanner} from '@awesome-cordova-plugins/barcode-scanner/ngx';



@Component({
  selector: 'app-pagina-scan-qr',
  templateUrl: './pagina-scan-qr.page.html',
  styleUrls: ['./pagina-scan-qr.page.scss'],
})
export class PaginaScanQrPage implements OnInit {

  dato: any;
  private path = 'Asistencia/';

  nuevaAsis: Asistencia = {
    Asignatura: '',
    estudiante: '',
    fecha: new Date,
    mensaje: 'Asistencia Guardada'
  }

  constructor(private database: DataService,
    private router: Router,
    private storage: Storage,
    private autentificacionService: AutentificacionService,
    private firebaseComponent: FirebaseComponent) { }

  ionViewDidEnter() {
    this.obtenerDato();
  }

  async guardarDato() {
    await this.database.guardarDato('Asistencia Stoarge',);
    this.obtenerDato();
  }
  async obtenerDato() {
    this.dato = await this.database.obtenerDato('Asistencia Stoarge');
  }
  onClick(ruta: string) {
    this.router.navigate(['/scancorrecto']);
  }

  async guardarasis(asignatura: string) {
    const userData = await this.storage.get('miClave');

    if (userData && userData.state && userData.state.user && userData.state.user.email) {
      const userEmail = userData.state.user.email;
      console.log('Correo:', userEmail);
      const id = this.database.getID();
      this.nuevaAsis.estudiante=userEmail;
      this.nuevaAsis.Asignatura= asignatura;
      this.database.crearDoc(this.nuevaAsis, this.path, id)
    } else {
      console.error('Nota el correo ql');
    }
  }
  ngOnInit() {
    
  }


}

