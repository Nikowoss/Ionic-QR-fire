import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { MenuInferiorComponent } from './components/menu-inferior/menu-inferior.component';
import { environment } from 'src/environments/environment';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { FirebaseComponent } from './components/firebase/firebase.component';
import {BarcodeScanner} from '@awesome-cordova-plugins/barcode-scanner/ngx'
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [AppComponent, MenuComponent, MenuInferiorComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    AngularFirestoreModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FirebaseComponent,BarcodeScanner
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
