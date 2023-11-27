import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { DataService } from 'src/app/services/data.service';
import { Asistencia } from 'src/app/interfaces/asistencia';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  private path = 'Asistencia/';
  private conditionField = 'estudiante';
  private conditionValue = '';
  asistencias: { asignatura: string, detalles: Asistencia[] }[] = [];

  constructor(private storage: Storage, private database: DataService) {
    this.initStorage();
    this.obtenerValorDelStorage();
  }

  async initStorage() {
    await this.storage.create();
  }

  async guardarStringEnStorage(valor: string) {
    await this.storage.set('miClavee', valor);
    console.log("Asistencia registrada")
  }

  valorGuardado: any;

  async obtenerValorDelStorage() {
    const crede = await this.storage.get('miClave');
    if (crede !== null) {
      this.valorGuardado = crede;
      console.log('Session:', crede);
    } else {
      console.log('No se encontró ningún valor con la clave proporcionada en el storage.');
    }
  }

  getAsistencias() {
    this.database.getCollectionxID<Asistencia>(this.path, this.conditionField, this.conditionValue).subscribe(res => {
      console.log(res);

      // Agrupar asistencias por asignatura
      const groupedAsistencias = res.reduce((acc, asistencia) => {
        const existingAsignatura = acc.find(item => item.asignatura === asistencia.Asignatura);
        if (existingAsignatura) {
          existingAsignatura.detalles.push(asistencia);
        } else {
          acc.push({ asignatura: asistencia.Asignatura, detalles: [asistencia] });
        }
        return acc;
      }, [] as { asignatura: string, detalles: Asistencia[] }[]);

      this.asistencias = groupedAsistencias;
    })
  }

  toggleExpandida(asignatura: { asignatura: string, detalles: Asistencia[] }) {
    asignatura.detalles.forEach(detalle => {
      detalle.expandida = !detalle.expandida;
    });
  }

  async ngOnInit() {
    const userData = await this.storage.get('miClave');

    if (userData && userData.state && userData.state.user && userData.state.user.email) {
      const userEmail = userData.state.user.email;
      console.log('Correo:', userEmail);
      this.conditionValue = userEmail;
      this.getAsistencias();
    }
  }
}
