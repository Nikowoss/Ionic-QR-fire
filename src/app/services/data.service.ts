import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: Storage, private database:AngularFirestore) {
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
  //PROBANDOWAS
  crearDoc(data:any,path:string,id:string){
    const collection = this.database.collection(path);
    return collection.doc(id).set(data)
  }
  getDoc(path:string,id:string){
    const collection = this.database.collection(path);
    return collection.doc(id).valueChanges
  }
  getID(){
    return this.database.createId();
  }
  getCollection<tipo>(path: string){
    const collection = this.database.collection<tipo>(path);
    return collection.valueChanges();
  }
  getCollectionxID<tipo>(path: string, conditionField: string, conditionValue: any) {
    const collection = this.database.collection<tipo>(path, ref => ref.where(conditionField, '==', conditionValue));
    return collection.valueChanges();
  }
}
