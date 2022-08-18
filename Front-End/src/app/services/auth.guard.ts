import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import jwt_decode from "jwt-decode";
import { Token } from '../_models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private router:Router ,private auth :LoginService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       var token = localStorage.getItem("token");
       if(token){
          const decode:Token = jwt_decode(token);
          if(route.data['role'] != decode.type){
           this.auth.logOut();
           this.router.navigateByUrl('unAuthorized');
           return false
          }
        return true
       }
    this.router.navigateByUrl('signin')
    return false;
  }
}
