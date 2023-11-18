import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { DataService } from 'src/app/services/data.service';
import { Asistencia } from 'src/app/interfaces/asistencia';

  

//interface Asignatura {
//  nombre: string;
//  asistencias: string;
//  contenido: Array<{ fecha: string; asistencia: string }>;
//  expandida: boolean;
//  clases: number;
//  totalClases: number;
// porcentajeAsistencias: number;
//}

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  private path = 'Asistencia/';
  asistencias:Asistencia[]=[];

  constructor(private storage: Storage,private database: DataService) {
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
  getAsistencias(){
    this.database.getCollection<Asistencia>(this.path).subscribe(res=>{
      console.log(res)
      this.asistencias = res;
    })
  }

  

  ngOnInit() {
    this.getAsistencias();
  }
  
}
