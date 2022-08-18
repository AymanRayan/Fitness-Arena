import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/_models/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private _http:HttpClient) { }
  uploadImg(id:number , data:any):Observable<any>{
    return this._http.post(`${environment.commonUrl}/api/users/image/${id}`, data)
  }

  getUserByID(userID:number){
    return this._http.get<Users>(`${environment.commonUrl}/api/users/${userID}`)
  }
  allCoaches(){
    return this._http.get<Users>(`${environment.commonUrl}/api/users/coaches`)
  }
  changePass(userID:number ,data:any){
    return this._http.post(`${environment.commonUrl}/api/users/changepassword/${userID}`,data)
  }
  editData(userID:number ,data:any){
      return this._http.put(`${environment.commonUrl}/api/users/${userID}`,data)
  }
  getClintes(coachId:number){
    return this._http.get(`${environment.commonUrl}/api/users/clients/${coachId}`)
  }
  editTrainee(trainee:number,data:any){
    return this._http.put(`${environment.commonUrl}/api/users/trainee/${trainee}`,data);
  }
}
