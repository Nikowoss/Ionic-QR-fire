import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/autentificacion.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {
  ionicForm: FormGroup;

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private authService: AutentificacionService,
    private router: Router,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          // Agrega aquí las validaciones para la contraseña si es necesario
        ],
      ],
    });
  }

  async login() {
    const loading = await this.loadingController.create({
      message: 'Iniciando sesión...',
    });
    await loading.present();

    if (this.ionicForm.valid) {
      const credentials = this.ionicForm.value;

      try {
        await this.authService.loginUser(credentials.email, credentials.password);
        this.router.navigate(['/asignaturas']);
      } catch (error) {
        this.presentErrorMessage('Usuario y contraseña incorrectos');
      } finally {
        loading.dismiss();
      }
    } else {
      loading.dismiss();
      this.presentErrorMessage('Por favor, proporciona todos los valores requeridos.');
    }
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  async presentErrorMessage(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
