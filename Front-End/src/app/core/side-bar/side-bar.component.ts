import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { DataServiceService } from 'src/app/services/user/data-service.service';
import { Users } from 'src/app/_models/users';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private auth:LoginService ,private data:DataServiceService ) { }
  
  ngOnInit(): void {
    this.link();
    this.getUser();
    this.toggle();
  }
  link(){
    const linkColor = document.querySelectorAll('.nav_link');
    linkColor.forEach(a=> a.addEventListener('click',(e) => {
      if(linkColor){
        linkColor.forEach(l => l.classList.remove('active'));
        a.classList.add('active');
      }
    }))
  }
  toggle(){
    const toggle = document.getElementById("header-toggle");
    const nav = document.getElementById('nav-bar')
    const headerpd = document.getElementById("header");
    if(toggle && nav && headerpd){
      toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show')
      headerpd.classList.toggle('body-pd')
    })
  }
}
  logOut(){
    this.auth.logOut();
  }
  userData : Users = {};
  getUser(){
    this.data.getUserByID(this.auth.userID()).subscribe(
      (d) => {
          this.userData = d;
          console.log(d);
      }
    )
  }
}
