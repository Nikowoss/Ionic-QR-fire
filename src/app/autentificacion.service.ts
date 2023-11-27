import { Injectable, inject} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { DataService } from './services/data.service';


@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  firestore = inject(AngularFirestore);
  utilsSvc = inject(DataService);


  constructor(public ngFireAuth: AngularFireAuth, public Firestore: AngularFirestore,private afAuth: AngularFireAuth) {

  }
  getCurrentUser() {
    return this.afAuth.authState.toPromise();
  }
  
  async registerUser(email: string, password: string, name: string) {
    return await this.ngFireAuth.createUserWithEmailAndPassword(email, password)

  }

  async loginUser(email: string, password: string) {
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password);

  }

  async resetPassword(email: string) {
    return await this.ngFireAuth.sendPasswordResetEmail(email);

  }
  async getProfile() {
    return await this.ngFireAuth.currentUser
  }

  async signOut() {
    return await this.ngFireAuth.signOut();
  }

  enviarDatos(data: any) {
    return this.Firestore.collection('prueba').add(data);
  }

  getDoc(id:any){
    return this.Firestore.collection('prueba').doc(id).valueChanges
  }

}
