import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Program } from 'src/app/_models/program';
import { TraineeProgram } from 'src/app/_models/trainee-program';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private _http:HttpClient) { }

  getProgramById(coachId :number){
    return this._http.get(`${environment.commonUrl}/api/programs/${coachId}`);
  }
  deleteProgram(programId :number){
    return this._http.delete(`${environment.commonUrl}/api/programs/${programId}`);
  }
  editProgram(programId:number , data:any){
    return this._http.put(`${environment.commonUrl}/api/programs/${programId}`,data);
  }
  addNewProg(data:Program){
    return this._http.post(`${environment.commonUrl}/api/programs`,data);
  }
  showProg(programId:number){
    return this._http.get<Program>(`${environment.commonUrl}/api/programs/showone/${programId}`);
  }
  showProgWorkouts(programId:number){
    return this._http.get<Program>(`${environment.commonUrl}/api/programs/workouts/${programId}`);
  }
  showAllWorkouts(){
    return this._http.get(`${environment.commonUrl}/api/workouts`)
  }
  addNewWorkout(data:any){
    return this._http.post(`${environment.commonUrl}/api/workouts`,data)
  }
  assignProgramToTrainee(data:any){
 return this._http.post(`${environment.commonUrl}/api/traineeprograms`,data)
  }
  getTraineeProgram(traineeId:number){
    return this._http.get(`${environment.commonUrl}/api/traineeprograms/programstrainee/${traineeId}`)
  }
  unassignProgram(traiprogId:number){
    return this._http.delete(`${environment.commonUrl}/api/traineeprograms/unassign/${traiprogId}`)
  }
  getAllTraineePrograms(userId:number){
    return this._http.get<TraineeProgram[]>(`${environment.commonUrl}/api/traineeprograms/traineeprogram/${userId}`);

  }
}
