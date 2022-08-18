import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TraineeBundle } from 'src/app/_models/trainee-bundle';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BundleService {

  constructor(private _http:HttpClient) { }

  getCoachbundle(id:number):Observable<any>{
     return this._http.get(`${environment.commonUrl}/api/bundles/${id}`)
  }
  addBundle(data:any){
    return this._http.post(`${environment.commonUrl}/api/bundles`,data);
  }
  deleteBundle(bundleID:any){
    return this._http.delete(`${environment.commonUrl}/api/bundles/${bundleID}`);
  }
  showTraineeBundle(traineeId:number){
    return this._http.get(`${environment.commonUrl}/api/traineeBundles/traineeBundle/${traineeId}`)
  }
  enrollTrainee(traineebundle:TraineeBundle){

    return this._http.post(`${environment.commonUrl}/api/traineeBundles`,traineebundle)

  }
  hasBundle(userId:number){
    return this._http.get<boolean>(`${environment.commonUrl}/api/traineeBundles/hasbundle?traineeId=${userId}`)
  }
  unsubscribe(userId:number){
    return this._http.delete(`${environment.commonUrl}/api/traineeBundles/unsubscribe/${userId}`);
  }
}
