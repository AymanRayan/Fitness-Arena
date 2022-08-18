import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProgramWorkout } from 'src/app/_models/program-workout';
import { Workout } from 'src/app/_models/workout';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  constructor(public http: HttpClient) {}
  host = environment.commonUrl;

  //get all workouts
  getAllWorkOuts() {
    return this.http.get<Workout[]>(`${this.host}/api/workouts`);
  }

  //get all trainee worksouts
  getAllTraineeWorkouts(id: number) {
    return this.http.get<any>(`${this.host}/api/workouts/traineeworkout/${id}`);
  }

  //get program workouts by programId
  getAllProgramWorkouts(id: number) {
    return this.http.get<ProgramWorkout[]>(`${this.host}/api/programWorkouts/getWorkoutByProgId/${id}`);
  }


}
