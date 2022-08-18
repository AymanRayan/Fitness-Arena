import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from 'src/app/services/workouts/workout.service';
import { ProgramWorkout } from 'src/app/_models/program-workout';
import { Workout } from 'src/app/_models/workout';

@Component({
  selector: 'app-trainee-program-details',
  templateUrl: './trainee-program-details.component.html',
  styleUrls: ['./trainee-program-details.component.css']
})
export class TraineeProgramDetailsComponent implements OnInit {

  constructor(public ar:ActivatedRoute,public workoutService:WorkoutService) { }
  workouts:ProgramWorkout[]=[]
  programId:number=0;
  ngOnInit(): void {
    this.ar.params.subscribe(p => {
      this.programId = Number(p['id']);
  })

this.workoutService.getAllProgramWorkouts(this.programId).subscribe(a=>{
  console.log(a)
  this.workouts=a
})
}
}
