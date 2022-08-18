import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramService } from 'src/app/services/program/program.service';
import { Program } from 'src/app/_models/program';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

interface workouts{
  workoutId?: number,
  programId?: number,
  progWork?: number,
  workout?: string
}

@Component({
  selector: 'app-prog-add-new',
  templateUrl: './prog-add-new.component.html',
  styleUrls: ['./prog-add-new.component.css']
})
export class ProgAddNewComponent implements OnInit {
  
  constructor(private program:ProgramService , private route: ActivatedRoute ,private auth:LoginService ,private router:Router) { 
  }
  
  ngOnInit(): void {
    this.showWorkouts();
  }

  workouts: any=[];

  addform:FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required]),
    target: new FormControl("" ,[Validators.required]),
    progDecription : new FormControl("",[Validators.required]),
    coachId : new FormControl(this.auth.userID()),
    programWorkouts:new FormControl([])
  });

  showWorkouts(){
    this.program.showAllWorkouts().subscribe((d) => {
      this.workouts = d;
    });
  }

  progDa : Program = {}
  selected:workouts[] =[]
  workoutId: any=[]
  handle(){
    this.workoutId =[];
    this.selected = this.addform.controls['programWorkouts'].value;
    this.selected.forEach(element => {
      this.workoutId.push({"workoutId" :element.workoutId});
    });
    this.progDa = this.addform.value
    this.progDa.programWorkouts =this.workoutId
    this.program.addNewProg(this.progDa).subscribe();
    this.router.navigateByUrl("programs").then(() => {
        window.location.reload();
    });
    
  }
  // add workOut
  addWorkout:FormGroup = new FormGroup({
    name:new FormControl(""),
    targetMuscle:new FormControl(""),
    description:new FormControl(""),
    // workoutMedium:new FormControl("") 
  });
  display:boolean = false;
  show() {
     this.display =true;
  }
  addNewWorkout(){
    this.program.addNewWorkout(this.addWorkout.value).subscribe((d) =>{
      this.showWorkouts();
    });
    this.display = false;
  }
}
