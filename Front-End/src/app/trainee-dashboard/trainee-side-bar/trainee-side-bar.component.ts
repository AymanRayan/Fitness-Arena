import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { DataServiceService } from 'src/app/services/user/data-service.service';

@Component({
  selector: 'app-trainee-side-bar',
  templateUrl: './trainee-side-bar.component.html',
  styleUrls: ['./trainee-side-bar.component.css'],
})
export class TraineeSideBarComponent implements OnInit {
  constructor(
    private roter: Router,
    private auth: LoginService,
    private userService: DataServiceService,
    ) {}
  userID: number = this.auth.userID();
  ngOnInit(): void {
    this.link();
    this.getUserByID(this.userID);
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
  //toggle sideBar
  toggle() {
    const toggle = document.getElementById('header-toggle');
    const nav = document.getElementById('nav-bar');
    const headerpd = document.getElementById('header');
    if (toggle && nav && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
        headerpd.classList.toggle('body-pd');
      });
    }
  }
  //logOut
  logOut() {
    localStorage.clear();
    this.roter.navigateByUrl('');
  }

  photoSrc: any = '';
  //get user photo src by user id and show it in img
  //if user has no img display defult img
  getUserByID(userID: number) {
    this.userService.getUserByID(userID).subscribe((a) => {
      this.photoSrc = "https://fitnessarena-api20220806024507.azurewebsites.net/images/"+a.photoSrc;
      document.getElementById('pp')?.setAttribute('src', this.photoSrc);
    });
  }
}
