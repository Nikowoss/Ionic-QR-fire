
import { Component } from '@angular/core';
import { AutentificacionService } from 'src/app/autentificacion.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss'],
})
export class FirebaseComponent {

  constructor(private autentificacionService: AutentificacionService) {}

  enviarDatosAFirestore() {
    const datos = {
      mensaje: 'Asistencia guardada en asignatura arquitectura',
    };
    this.autentificacionService.enviarDatos(datos).then(() => {
      console.log('Datos enviados exitosamente a Firestore');
    }).catch(error => {
      console.error('Error al enviar datos a Firestore:', error);
    });
  }
}
