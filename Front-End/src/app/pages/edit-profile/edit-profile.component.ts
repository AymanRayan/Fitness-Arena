import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BundleService } from 'src/app/services/bundle/bundle.service';
import { LoginService } from 'src/app/services/login.service';
import { DataServiceService } from 'src/app/services/user/data-service.service';
import { Users } from 'src/app/_models/users';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  
  constructor(private auth:LoginService , private data:DataServiceService , private bundle:BundleService ,private router:Router) { }
  user:Users ={}
  ngOnInit(): void {
    this.getdata();
    this.getbundle();
  }
  coachId :number = this.auth.userID();
  ////show coach data
  getdata(){
    this.data.getUserByID(this.coachId).subscribe(
      (d) =>{
      this.user = d;
  })
  }
  ///////////// show bundles
  coachbundle:any =[]
  getbundle(){
    this.bundle.getCoachbundle(this.coachId).subscribe(
      (d) => {
        this.coachbundle = d;
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
       this.data.changePass(this.coachId,this.changePass.value).subscribe();
       this.router.navigateByUrl(`/profile/${this.coachId}`)
  }
////////add bundle
displayBundle:boolean=false
showAddBundle(){
  this.displayBundle = true;
}
addBundle:FormGroup = new FormGroup({
  name:new FormControl(""),
  fees:new FormControl(""),
  coachId:new FormControl(this.coachId),
  durationDays:new FormControl(""),
  description:new FormControl("")
})
addNewBandle(){
  this.bundle.addBundle(this.addBundle.value).subscribe((d) => {
    this.getbundle();
    this.getdata();
    this.displayBundle=false;
  })
}
delBundle(bundleID:number){
   this.bundle.deleteBundle(bundleID).subscribe((d)=>{
    this.getbundle();
    this.getdata();
   });
}


  /////edit data
  editData = new FormGroup({
    type: new FormControl("coach"),
    birthDate: new FormControl(this.user.birthDate),
    fname:new FormControl(this.user.fname,
    [Validators.minLength(3)]),
    lname:new FormControl(this.user.lname,
    [Validators.minLength(3)]),
    address:new FormControl(this.user.address),
    categoryName:new FormControl(this.user.categoryName),  
    email:new FormControl("Email"),
    password:new FormControl("password"),
    gender:new FormControl("male"),
  });
  handleEdit(){
    this.data.editData(this.coachId,this.editData.value).subscribe((e) => {
      this.router.navigateByUrl(`/profile/${this.coachId}`)
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
    this.getbundle();
  });
}


}
