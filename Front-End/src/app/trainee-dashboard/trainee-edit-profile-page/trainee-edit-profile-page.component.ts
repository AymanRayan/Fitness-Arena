import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BundleService } from 'src/app/services/bundle/bundle.service';
import { InBodyService } from 'src/app/services/inBody/in-body.service';
import { LoginService } from 'src/app/services/login.service';
import { DataServiceService } from 'src/app/services/user/data-service.service';
import { Users } from 'src/app/_models/users';

@Component({
  selector: 'app-trainee-edit-profile-page',
  templateUrl: './trainee-edit-profile-page.component.html',
  styleUrls: ['./trainee-edit-profile-page.component.css']
})
export class TraineeEditProfilePageComponent implements OnInit {

  constructor(private auth:LoginService , private data:DataServiceService , private bundle:BundleService ,private router:Router,public inbody:InBodyService) { }

  user:Users ={}
  ngOnInit(): void {
    this.getdata();
    this.getinbody();
  }
  traineeId :number = this.auth.userID();
  ////show coach data
  getdata(){
    this.data.getUserByID(this.traineeId).subscribe(
      (d) =>{
      this.user = d;
  })
  }
  traineeInbody:any =[]
  getinbody(){
    this.inbody.getAllInBodies(this.traineeId).subscribe(
      (d) => {
        this.traineeInbody = d;
      }
    )
  }
   //////change password
   displayPass:boolean = false;
   showChangePass(){
     this.displayPass = true;
   }
   changePass = new FormGroup({
     oldPass:new FormControl("", [Validators.required , Validators.minLength(6)]),
     newPass:new FormControl("",[Validators.required,Validators.minLength(6)])
   });
   changePassword(){
        this.data.changePass(this.traineeId,this.changePass.value).subscribe();
        this.router.navigateByUrl(`/profile/${this.traineeId}`)
   }
   delInbody(bundleID:number){
    this.inbody.remove(bundleID).subscribe
    ((d)=>{
     this.getinbody();
     this.getdata();
    });
 }

  /////edit data
  editData = new FormGroup({
    type: new FormControl("trainee"),
    birthDate: new FormControl(this.user.birthDate),
    fname:new FormControl(this.user.fname,
    [Validators.minLength(3)]),
    lname:new FormControl(this.user.lname,
    [Validators.minLength(3)]),
    address:new FormControl(this.user.address),
    target:new FormControl(this.user.target),
    cardNumber:new FormControl("123456789"),   
    email:new FormControl("Email"),
    password:new FormControl("password"),
    gender:new FormControl("male"),
  });
  handleEdit(){
    this.data.editTrainee(this.traineeId,this.editData.value).subscribe((e) => {
      this.router.navigateByUrl(`/trainee/${this.traineeId}`)
    });
  }

//edit photo
id:number = this.auth.userID();
myFile:any=""
imgURL:any=""

onChange(event:any){
  this.myFile= event.target.files[0]
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (_event) => {
    this.imgURL = reader.result;
  }
}

onUpload(){
  const formData = new FormData()
  formData.append('img',this.myFile,this.myFile.name)
  this.data.uploadImg(this.id,formData).subscribe((d) => {
    this.getdata();
    this.getinbody();
  });
}

}
