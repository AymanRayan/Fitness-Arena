import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from 'src/app/services/program/program.service';
import { Program } from 'src/app/_models/program';

@Component({
  selector: 'app-progshow-one',
  templateUrl: './progshow-one.component.html',
  styleUrls: ['./progshow-one.component.css']
})
export class ProgshowOneComponent implements OnInit {

  constructor(private program:ProgramService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.progData();
    this.showProByID();
    this.programWorkouts();
  }
  progId :number =0
  prog : Program ={}
  progWorkOuts : any =[]
  progData(){
    this.route.params.subscribe(p => {
       this.progId = Number(p['id']);
    })
  }
  showProByID(){
    this.program.showProg(this.progId).subscribe((d) => {
      this.prog = d;
    })
  }
  programWorkouts(){
    this.program.showProgWorkouts(this.progId).subscribe((d) => {
      this.progWorkOuts =d;
    })
  }

}
 