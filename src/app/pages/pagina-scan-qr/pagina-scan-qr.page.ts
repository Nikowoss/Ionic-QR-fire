import { Usuario } from './../../interfaces/usuario';
import { Component, OnInit, inject } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { FirebaseComponent } from '../../components/firebase/firebase.component';
import { AutentificacionService } from 'src/app/autentificacion.service';
import { DataService } from 'src/app/services/data.service';
import { Asistencia } from 'src/app/interfaces/asistencia';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx'
import { AlertController } from '@ionic/angular';

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

  palabras: string[] = ["Inglés", "Arquitectura", "Calidad de software", "Portafolio"];

  constructor(
    private database: DataService,
    private barcodescanner: BarcodeScanner,
    private router: Router,
    private storage: Storage,
    private autentificacionService: AutentificacionService,
    private firebaseComponent: FirebaseComponent,
    private alertController: AlertController
  ) { }

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
        this.qr = barcodedata.text;
        this.texto = JSON.stringify(barcodedata);
        const userEmail = userData.state.user.email;
        console.log('Correo:', userEmail);
        const id = this.database.getID();
        this.nuevaAsis.estudiante = userEmail;
        this.nuevaAsis.Asignatura = this.qr;

        // Verificar si la asignatura está en la lista de palabras
        const asignaturaValida = this.palabras.includes(this.nuevaAsis.Asignatura.trim());

        if (asignaturaValida) {
          // Asignatura válida, guardar datos y navegar a asignaturas
          this.database.crearDoc(this.nuevaAsis, this.path, id)
          this.database.guardarDato('Asistencia Stoarge');
          this.obtenerDato();
          this.router.navigate(['/asignaturas'], { state: { showAlert: true } });
        } else {
          // Asignatura no válida, puedes manejar esto según tus requisitos
          this.alertadescan()
        }
      } else {
        console.error('Nota el correo ql');
      }

    }).catch(err => {
      console.log("ERROR AL ESCANEAR!!!!");
    })
  }

  ngOnInit() {

  }
  async alertadescan(){
    const alert = await this.alertController.create({
      header: "Problemas QR",
      message: "Asegurate de escanear el QR del profesor y no cualquiera",
      buttons: ["OK"]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }
}
