import { Component, OnInit } from '@angular/core';
import { BundleService } from 'src/app/services/bundle/bundle.service';
import { LoginService } from 'src/app/services/login.service';
import { DataServiceService } from 'src/app/services/user/data-service.service';
import { Users } from 'src/app/_models/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private data:DataServiceService 
    ,private auth:LoginService
    ,private bundle:BundleService) { }

  ngOnInit(): void {
    this.getData();
    this.getbundles();
  }
  userData:Users ={}
  coachId :number =this.auth.userID();
  getData(){
    this.data.getUserByID(this.coachId).subscribe((d) => {
      this.userData =d;
    })
  }
  coachBundle:any=[]
  getbundles(){
    this.bundle.getCoachbundle(this.coachId).subscribe((d) => {
    this.coachBundle = d;
    })
  }
}
