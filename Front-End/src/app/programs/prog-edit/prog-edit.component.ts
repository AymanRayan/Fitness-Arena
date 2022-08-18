import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ProgramService } from 'src/app/services/program/program.service';
import { Program } from 'src/app/_models/program';


interface workouts {
  workoutId?: number,
  programId?: number,
  progWork?: number,
  workout?: string
}
@Component({
  selector: 'app-prog-edit',
  templateUrl: './prog-edit.component.html',
  styleUrls: ['./prog-edit.component.css']
})
export class ProgEditComponent implements OnInit {
  
  constructor(private program:ProgramService , private route: ActivatedRoute ,private auth:LoginService ,private router:Router) {}
   
  ngOnInit(): void {
    this.progData();
    this.showWorkouts();
  }
  //show program
  progId :number =0
  programData:any ={}
  progData(){
    this.route.params.subscribe(p => {
       this.progId = Number(p['id']);
    })
    this.program.showProg(this.progId).subscribe((d => {
      this.programData =d;
    }))
  }

  //show workOuts
  workouts: any =[];
  showWorkouts(){
    this.program.showAllWorkouts().subscribe((d) => {
      this.workouts = d;
    });
  }
  ////edit program
  editform:FormGroup = new FormGroup({
    name: new FormControl(this.programData.name),
    target: new FormControl(this.programData.target),
    progDecription : new FormControl(this.programData.progDecription),
    coachId : new FormControl(this.auth.userID()),
    programWorkouts:new FormControl([])
  });
  progDa : Program = {}
  selected:workouts[] =[]
  workoutId: any=[]
  handle(){
    this.workoutId=[];
    this.selected = this.editform.controls['programWorkouts'].value;
    this.selected.forEach(e => {
      this.workoutId.push({"workoutId" : e.workoutId})
    });
    this.progDa = this.editform.value
    this.progDa.programWorkouts = this.workoutId;
    this.program.editProgram(this.progId,this.progDa).subscribe();
    this.router.navigateByUrl("programs").then(() => {
      window.location.reload();
    })
  }
}
