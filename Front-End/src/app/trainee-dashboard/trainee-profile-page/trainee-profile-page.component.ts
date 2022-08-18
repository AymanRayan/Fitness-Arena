import { Component, OnInit } from '@angular/core';
import { BundleService } from 'src/app/services/bundle/bundle.service';
import { InBodyService } from 'src/app/services/inBody/in-body.service';
import { LoginService } from 'src/app/services/login.service';
import { DataServiceService } from 'src/app/services/user/data-service.service';
import { Users } from 'src/app/_models/users';

@Component({
  selector: 'app-trainee-profile-page',
  templateUrl: './trainee-profile-page.component.html',
  styleUrls: ['./trainee-profile-page.component.css']
})
export class TraineeProfilePageComponent implements OnInit {

  constructor(private data:DataServiceService 
    ,private auth:LoginService
    ,private bundle:BundleService ,public inBodyService: InBodyService) { }

  ngOnInit(): void {
    this.getData();
    this.getinbody();
    this.subscribedBundle();
    this.hasbundle();
  }
  userData:Users ={}
  coachId :number =this.auth.userID();
  getData(){
    this.data.getUserByID(this.coachId).subscribe((d) => {
      this.userData =d;
    })
  }
  traineeinbody:any =[]
  getinbody(){
    this.inBodyService.getAllInBodies(this.auth.userID()).subscribe((d) => {
      this.traineeinbody = d;
    });
  }
  remove(inbodyid: number) {
    this.inBodyService.remove(inbodyid).subscribe((a) => {
      this.getinbody();
    });
  }
  traineebundel:any=[]
  
  subscribedBundle(){
    this.bundle.showTraineeBundle(this.auth.userID()).subscribe((d) => {
      this.traineebundel = d;
      console.log(d);
    })
  }
  subscribed:any =false
  hasbundle(){
    this.subscribed = this.bundle.hasBundle(this.auth.userID()).subscribe((d) => {
      this.subscribed = d;
    });
  }
  unsubscribe(){
    this.bundle.unsubscribe(this.auth.userID()).subscribe();
  }
}
