import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/autentificacion.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {

  email:any
  constructor(private authService:AutentificacionService,private toastController: ToastController,private router: Router) { }

  ngOnInit() {
  }

  reset(){
    this.authService.resetPassword(this.email).then( () =>{      
      console.log('sent'); //show confirmation dialog
      this.presentToast()
    })
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your reset password link has been sent on your email',
      duration: 2000, // Duration in milliseconds
      position: 'bottom' // Position of the toast (top, bottom, middle)
    });
  
    toast.present();
    toast.onDidDismiss().then(()=>{
      this.router.navigate(['/login']);
    })
  }
}



//   constructor(
//     private alertController:AlertController,
//     private router:Router,
//     public menuCtrl:MenuController,
//   ) { }
//   usuario={
//     username:''
//    }
//   ngOnInit() {
//   }
//   onSubmit()
//   {
//     if (this.usuario.username=="gaby"){
//       this.presentAlertAA()
//       this.router.navigate(['/estudiante'])
//     }
//     else{
      
//       this.presentAlert()
//     }

//   }
//   async presentAlert() {
//     const alert = await this.alertController.create({
//       header: 'Alerta',
//       subHeader: 'Información',
//       message: "Correo no valido",
//       buttons: ['OK'],
//       backdropDismiss:false,
      
//     });

//     await alert.present();

 
//   }
//   async presentAlertAA() {
//     const alert = await this.alertController.create({
//       header: 'Enviado',
//       subHeader: 'Información',
//       message: "Correo enviado, mira tu bandeja de entrada",
//       buttons: ["Ir al inicio"],
//       backdropDismiss:false,
      
//     });

//     await alert.present();

 
//   }
//   ionViewDidEnter() {
//     this.menuCtrl.enable(false)
//   }
//   ionViewWillLeave() {
//     this.menuCtrl.enable(true)
//   }
// }
