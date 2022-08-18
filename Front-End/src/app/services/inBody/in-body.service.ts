import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inbody } from 'src/app/_models/inbody';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InBodyService {
  host = environment.commonUrl;

  getAllInBodies(userId:number) {
    return this.http.get<Inbody[]>(`${this.host}/api/inbodies/trainee/${userId}`);
  }
  constructor(public http: HttpClient) {}

  addInBody(inbody: Inbody) {
    return this.http.post<Inbody>(`${this.host}/api/inbodies`, inbody);
  }
  remove(id: number) {
    console.log(`${this.host}/api/inbodies${id}`);
    return this.http.delete<Inbody[]>(`${this.host}/api/inbodies/${id}`);
  }
}
