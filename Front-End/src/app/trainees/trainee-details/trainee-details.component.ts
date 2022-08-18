import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BundleService } from 'src/app/services/bundle/bundle.service';
import { InBodyService } from 'src/app/services/inBody/in-body.service';
import { LoginService } from 'src/app/services/login.service';
import { ProgramService } from 'src/app/services/program/program.service';
import { DataServiceService } from 'src/app/services/user/data-service.service';

@Component({
  selector: 'app-trainee-details',
  templateUrl: './trainee-details.component.html',
  styleUrls: ['./trainee-details.component.css']
})
export class TraineeDetailsComponent implements OnInit {
  constructor(private data:DataServiceService , private activeRou:ActivatedRoute ,private auth:LoginService,private program:ProgramService,private bundle:BundleService ,public inbodies:InBodyService) { }
  
  ngOnInit(): void {
    this.getclientData();
    this.coachPrograms();
    this.traineeProg();
    this.traibun();
    this.load();
  }
  //client data
  clientsID:number=0
  clientData:any={}
  getclientData(){
    this.activeRou.params.subscribe((p) => {
      this.clientsID = Number(p['id']);
      this.data.getUserByID(this.clientsID).subscribe((d) => {
        this.clientData = d;
      })
    })
  }
 
 //coach program
 coachId = this.auth.userID();
 coachProgram:any=[];
 coachPrograms(){
  this.program.getProgramById(this.coachId).subscribe((d) =>{
     this.coachProgram = d
  })
 }
 assign:FormGroup = new FormGroup({
  programId:new FormControl(""),
  traineeId:new FormControl(this.clientData.userId)
 })
 assignProg(){
  this.assign.patchValue({
    traineeId : this.clientsID
  })
  this.program.assignProgramToTrainee(this.assign.value).subscribe((d) => {
    this.assign.reset();
    this.traineeProg();
  })
 }
 
 //trainee assigned program
 traineeProgram:any =[]
 traineeProg(){
  this.program.getTraineeProgram(this.clientsID).subscribe((d)=>{
    this.traineeProgram = d;
  })
 }
//traine bundle
traineebundle:any ={}
traibun(){
  this.bundle.showTraineeBundle(this.clientsID).subscribe((d) => {
    this.traineebundle = d;
  })
}
//unassign program
unassignProgram(protraiId:number){
   this.program.unassignProgram(protraiId).subscribe((d) => {
     this.traineeProg();
   })
}
inbody:any={};
load(){
  this.inbodies.getAllInBodies(this.clientsID).subscribe((a) => {
    this.inbody = a;
  });
}
}
