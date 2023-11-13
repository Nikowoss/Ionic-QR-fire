import { Injectable, inject} from '@angular/core';
import firebase from 'firebase/compat/app';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { getFirestore, setDoc, doc, getDoc, addDoc } from '@angular/fire/firestore'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { DataService } from './services/data.service';


@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  firestore = inject(AngularFirestore);
  utilsSvc = inject(DataService);


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

  //NICO WEIANDO AQUI
  //A

  async getAttendances() {
    const querySnapshot = await getDocs(collection(getFirestore(), 'prueba'));
    return querySnapshot.docs.map(doc => doc.data());
  }
  async getAttendancess() {
    const querySnapshot = await getDocs(collection(getFirestore(), 'pruebanico'));
    return querySnapshot.docs.map(doc => doc.data());
  }
}
