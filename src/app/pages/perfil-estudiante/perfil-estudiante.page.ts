import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.page.html',
  styleUrls: ['./perfil-estudiante.page.scss'],
})
export class PerfilEstudiantePage implements OnInit {

  usuario={
    username:'',
    password:''
   }
  valid_pass={
    pass1:'',
    pass2:'',
  }
  
  constructor(
    private router:Router,
    private alertController:AlertController
    ) { }

ngOnInit() {
}

onSubmit()
{
  if (this.valid_pass.pass1==this.valid_pass.pass2){
    this.contraseñacambiada()
    
  }
  else{
    
    this.presentAlert()
  }

}
async contraseñacambiada() {
  const alert = await this.alertController.create({
    header: 'Contraseña Cambiada',
    message: "Tu contraseña ha sido cambiada",
    buttons: ["Aceptar"],
    backdropDismiss:false,


  });

  await alert.present();
}

async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Alerta',
    message: "Datos mal ingresados",
    buttons: ['OK'],
    backdropDismiss:false,
    
  });

  await alert.present();


}
}

