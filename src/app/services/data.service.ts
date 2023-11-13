import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async guardarDato(clave: string) {
    const valorActual = await this.storage.get(clave) || 0;
    await this.storage.set(clave, valorActual + 1);
  }

  obtenerDato(clave: string): Promise<any> {
    return this.storage.get(clave);
  }

}
