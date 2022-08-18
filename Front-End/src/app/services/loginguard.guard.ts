import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate {
  constructor(private router:Router ,private auth :LoginService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
          if(this.auth.isLogedin()){
            if(this.auth.userType() == 'coach'){
              this.router.navigateByUrl('coachhome')
            }else{
               this.router.navigateByUrl('traineehome')
            }
            return false
          }
    return true;
  }
  
}
