import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


interface Asignatura {
  nombre: string;
  asistencias: string;
  contenido: Array<{ fecha: string; asistencia: string }>;
  expandida: boolean;
  clases: number;
  totalClases: number;
  porcentajeAsistencias: number;
}

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  asignaturas: Asignatura[] = [
    {
      nombre: 'Arquitectura',
      asistencias: '2 de 4', 
      contenido: [
        { fecha: 'Miércoles, 09 de agosto', asistencia: 'Presente' },
        { fecha: 'Miércoles, 16 de agosto', asistencia: 'Ausente' },
        { fecha: 'Miércoles, 23 de agosto', asistencia: 'Presente' },
        { fecha: 'Miércoles, 30 de agosto', asistencia: 'Ausente' },
      ],
      expandida: false,
      clases: 2,
      totalClases: 4,
      porcentajeAsistencias: 0,
    },
    {
      nombre: 'Programación de aplicaciones móviles',
      asistencias: '3 de 4', 
      contenido: [
        { fecha: 'Lunes, 07 de agosto', asistencia: 'Presente' },
        { fecha: 'Lunes 14 de agosto', asistencia: 'Ausente' },
        { fecha: 'Lunes 21 de agosto', asistencia: 'Presente' },
        { fecha: 'Lunes 28 de agosto', asistencia: 'Presente' },
      ],
      expandida: false,
      clases: 3,
      totalClases: 4,
      porcentajeAsistencias: 0,
    },
    {
      nombre: 'Inglés intermedio',
      asistencias: '3 de 4', 
      contenido: [
        { fecha: 'Martes, 08 de agosto', asistencia: 'Presente' },
        { fecha: 'Miércoles 09 de agosto', asistencia: 'Ausente' },
        { fecha: 'Jueves 10 de agosto', asistencia: 'Presente' },
        { fecha: 'Miércoles 16 de agosto', asistencia: 'Presente' },
      ],
      expandida: false,
      clases: 3,
      totalClases: 4,
      porcentajeAsistencias: 0,
    },
  ];
  

  constructor(private storage: Storage) {
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
  ngOnInit() {
    this.asignaturas.forEach((asignatura) => {
      const [asistidas, total] = asignatura.asistencias.split(' de ').map(Number);
      asignatura.clases = asistidas;
      asignatura.totalClases = total;
      asignatura.porcentajeAsistencias = (asistidas / total) * 100;
    });
  }
  
}
