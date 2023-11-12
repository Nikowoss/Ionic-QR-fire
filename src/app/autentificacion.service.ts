import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  constructor(public ngFireAuth: AngularFireAuth, public Firestore: AngularFirestore) {

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
 

getDocument(){

}

editDocument(){

}

}
