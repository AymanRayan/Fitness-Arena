import { Component, OnInit } from '@angular/core';
import { FormGroup ,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-regi-trainee',
  templateUrl: './regi-trainee.component.html',
  styleUrls: ['./regi-trainee.component.css']
})
export class RegiTraineeComponent implements OnInit {
  traineeReq : FormGroup = new FormGroup({
  type: new FormControl("trainee"),
  birthDate: new FormControl("",[Validators.required]),
  fname:new FormControl("",
    [Validators.required, Validators.minLength(3)]),
  lname:new FormControl("",
    [Validators.required, Validators.minLength(3)]),
  email:new FormControl("",[Validators.email,Validators.required]),
  password:new FormControl("",[Validators.required,Validators.minLength(6)]),
  gender:new FormControl("")
  
  })
  constructor(private reg:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  handleReg(){
    this.reg.register(this.traineeReq.value).subscribe(
      (d) => {
        localStorage.setItem('token',d.theToken);
        this.router.navigateByUrl('traineehome');
      })
    }
}
