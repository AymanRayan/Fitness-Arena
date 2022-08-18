import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InBodyService } from 'src/app/services/inBody/in-body.service';
import { LoginService } from 'src/app/services/login.service';
import { Inbody } from 'src/app/_models/inbody';

@Component({
  selector: 'app-trainee-add-inbody-page',
  templateUrl: './trainee-add-inbody-page.component.html',
  styleUrls: ['./trainee-add-inbody-page.component.css'],
})
export class TraineeAddInbodyPageComponent implements OnInit {
  constructor(public inBodyService: InBodyService, public router: Router ,public auth:LoginService) {}

  // ad use id daynamicly
  newInBody: Inbody = new Inbody(0, new Date(), 0, 0, 0, 0, 0, 0, this.auth.userID());

  add() {

    console.log(this.newInBody);
    this.inBodyService.addInBody(this.newInBody).subscribe((a) => {
      console.log(a);
    });
    this.router.navigateByUrl('/Traineeinbody');
  }
  ngOnInit(): void {}
}
