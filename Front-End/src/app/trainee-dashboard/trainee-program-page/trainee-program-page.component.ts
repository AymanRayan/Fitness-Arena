import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/user/data-service.service';
import { WorkoutService } from 'src/app/services/workouts/workout.service';
import { ProgramWorkout } from 'src/app/_models/program-workout';
import { Workout } from 'src/app/_models/workout';
import { LoginService } from 'src/app/services/login.service';
import { ProgramService } from 'src/app/services/program/program.service';
import { TraineeProgram } from 'src/app/_models/trainee-program';


@Component({
  selector: 'app-trainee-program-page',
  templateUrl: './trainee-program-page.component.html',
  styleUrls: ['./trainee-program-page.component.css'],
})
export class TraineeProgramPageComponent implements OnInit {
  constructor(public workoutserveice: WorkoutService,public user:LoginService,public programService:ProgramService) {}
  // public allTraineeWorkOuts: any[] = [];
  // public programsIds: any;
  // public workouts: any;

  public traineePrograms:TraineeProgram[]=[]







  load() {
    // this.workoutserveice.getAllTraineeWorkouts(this.user.userID()).subscribe(
    //   (a) => {
    //     this.programsIds = a.ids;
    //     this.workouts = a.programWorkouts;
    //     console.log(a);
    //   },
    //   (b) => {
    //     console.log(b);
    //   }
    // );
    this.programService.getAllTraineePrograms(this.user.userID()).subscribe(a=>{
      this.traineePrograms=a;
    })


  }
  ngOnInit(): void {
    this.load();
  }
}
