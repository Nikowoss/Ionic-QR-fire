import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AutentificacionService } from 'src/app/autentificacion.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from './../../interfaces/usuario';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {
  ionicForm: FormGroup;
  usuario: Usuario = {
    email: '',
    password: ''
  }
  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private authService: AutentificacionService,
    private router: Router,
    public formBuilder: FormBuilder,
    private storage: Storage
  ) { }

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
        this.activar(1);
        let ext: NavigationExtras = {
          state: {
            UsuarioActi : credentials.email
          }
        }
        console.log(ext)
        this.router.navigate(['/asignaturas'],ext);
      } catch (error) {
        this.presentErrorMessage('Usuario y contraseña incorrectos');
        this.activar(0);
      } finally {
        loading.dismiss();
      }
    } else {
      loading.dismiss();
      this.presentErrorMessage('Por favor, proporciona todos los valores requeridos.');
      this.activar(0);
    }
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  async activar(valor: Number) {
    await this.storage.set("sesion", valor);
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
