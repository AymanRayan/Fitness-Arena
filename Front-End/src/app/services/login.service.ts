import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { Token } from '../_models/token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private _http:HttpClient ,private roter:Router){}

  host = environment.commonUrl;

  

  login(data:any):Observable<any>{
    return this._http.post(`${this.host}/api/users/login`,data);;
  }
  register(traineData:any):Observable<any>{
    return this._http.post(`${environment.commonUrl}/api/users/signup`,traineData);

  }
  logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    this.roter.navigateByUrl('');
  }
  isLogedin(){
    if(localStorage.getItem("token")){
      return true;
    }
    return false;
  }
  userType(){
    var token = localStorage.getItem("token");
    if(token){
      const decode:Token = jwt_decode(token);
      return decode.type
    }
    return ""; 
  }
  userID(){
    var token = localStorage.getItem("token");
    if(token){
      const decode:Token = jwt_decode(token);
      return decode.userId
    }
    return 0;
  }

}


