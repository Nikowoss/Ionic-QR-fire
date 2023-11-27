import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor(private router:Router,private storage: Storage) { }

  ngOnInit() {}

  onClick(){
    this.activar(0);
  }

  async activar(valor:Number)
  {
    await this.storage.set("sesion",valor);
  }

}