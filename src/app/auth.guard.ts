import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      let name = sessionStorage.getItem('name');
      let id = sessionStorage.getItem('id');
      
      if (id != null && name != null){
        console.log(sessionStorage);
        
        resolve(true);
      }
        
      else {
        reject(false);
        this.router.navigateByUrl('login');


      }

    })
  }
  
}
