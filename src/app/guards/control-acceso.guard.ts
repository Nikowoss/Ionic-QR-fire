import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ControlAccesoGuard implements CanActivate {
 
 //session=1;
 
constructor(private storage:Storage,private router:Router){

}
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.permitirAcesso();
  }
  

  async permitirAcesso()
  {
    if (await this.storage.get("sesion")==1)
    {
      return true;
    }
    else{
      return this.router.navigate(['/estudiante']);
    }
  }

}
