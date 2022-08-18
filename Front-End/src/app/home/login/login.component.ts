import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import jwt_decode from "jwt-decode";
import { Token } from 'src/app/_models/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:LoginService ,private router:Router) {
  }
  user : any = {email:"a@a.c",password:"123456"}

  msg : string =""
  x : boolean = false
  ngOnInit(): void {
  }
  handleLogin(loginForm : NgForm) {
       if(loginForm.valid){
        this.auth.login(this.user).subscribe(
          (d) => {
            localStorage.setItem('token',d.theToken);
            var decode :Token = jwt_decode(d.theToken);
            if(decode.type == 'coach'){
              this.router.navigateByUrl('coachhome')
            }else{
              this.router.navigateByUrl('traineehome')
            }
          },
          (e) => {
            loginForm.resetForm()
            this.msg = e.error.data
          },
          () => {
            this.msg =""
            this.x = false
            loginForm.resetForm()
          }
        )
    }
  }

}



