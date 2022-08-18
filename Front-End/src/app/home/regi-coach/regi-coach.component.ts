import { Component, OnInit } from '@angular/core';
import { FormGroup ,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-regi-coach',
  templateUrl: './regi-coach.component.html',
  styleUrls: ['./regi-coach.component.css']
})
export class RegiCoachComponent implements OnInit {
  coachReg:FormGroup = new FormGroup({
    type: new FormControl("coach"),
  birthDate: new FormControl("",[Validators.required]),
  fname:new FormControl("",
    [Validators.required, Validators.minLength(3)]),
  lname:new FormControl("",
    [Validators.required, Validators.minLength(3)]),
  address:new FormControl(""),
  categoryName:new FormControl(""),  
  email:new FormControl("",[Validators.email,Validators.required]),
  password:new FormControl("",[Validators.required,Validators.minLength(6)]),
  gender:new FormControl(""),

  })
  constructor(private reg:LoginService ,private router:Router) { }

  ngOnInit(): void {
  }
  handleReg(){
    this.reg.register(this.coachReg.value).subscribe(
      (d) => {
          localStorage.setItem('token',d.theToken);
          this.router.navigateByUrl('coachhome')
      }
    )
  }
} 
