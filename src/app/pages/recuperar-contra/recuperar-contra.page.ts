import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {
  email: any;

  constructor(
    private authService: AutentificacionService,
    private toastController: ToastController,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async reset() {
    this.authService.resetPassword(this.email).then(() => {
      this.presentAlert();
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Cambio de contraseña',
      message: 'Podrás cambiar la contraseña en el enlace que te enviamos a tu correo.',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Aceptar clickeado');
            this.router.navigate(['/estudiante']);
          },
        },
      ],
    });

    await alert.present();
  }
}
