import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ProgramService } from 'src/app/services/program/program.service';

@Component({
  selector: 'app-prog-show-all',
  templateUrl: './prog-show-all.component.html',
  styleUrls: ['./prog-show-all.component.css']
})
export class ProgShowAllComponent implements OnInit {

  constructor(private program:ProgramService ,private auth:LoginService ,private router:Router) { }

  ngOnInit(): void {
    this.getCoachProgram();
  }
  coachProgram:any=[];
  no:number = 0;
  getCoachProgram(){
    this.program.getProgramById(this.auth.userID())
    .subscribe((d) => {
      this.coachProgram = d;
    });
  }
  deleteProg(progId :number){
    this.program.deleteProgram(progId).subscribe();
    location.reload();
  }
}
