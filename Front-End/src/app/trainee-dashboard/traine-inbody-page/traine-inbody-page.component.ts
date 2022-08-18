import { Component, OnInit } from '@angular/core';
import { InBodyService } from 'src/app/services/inBody/in-body.service';
import { LoginService } from 'src/app/services/login.service';
import { Inbody } from 'src/app/_models/inbody';

@Component({
  selector: 'app-traine-inbody-page',
  templateUrl: './traine-inbody-page.component.html',
  styleUrls: ['./traine-inbody-page.component.css'],
})
export class TraineInbodyPageComponent implements OnInit {
  public inbodies: Inbody[] = [];
  constructor(public inBodyService: InBodyService ,public auth:LoginService) { }

  ngOnInit(): void {
    this.load()
  }
  load(){
    this.inBodyService.getAllInBodies(this.auth.userID()).subscribe((a) => {
      this.inbodies = a;
    });
  }
  remove(inbodyid: number) {
    this.inBodyService.remove(inbodyid).subscribe((a) => {
      this.load();
    });
  }
}
