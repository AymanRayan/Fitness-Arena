import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Pusher from 'pusher-js';
import { Message } from 'src/app/_models/message';
import { LoginService } from 'src/app/services/login.service';
import { DataServiceService } from 'src/app/services/user/data-service.service';

@Component({
  selector: 'app-trainee-contact-coach-page',
  templateUrl: './trainee-contact-coach-page.component.html',
  styleUrls: ['./trainee-contact-coach-page.component.css'],
})
export class TraineeContactCoachPageComponent implements OnInit {
  userId:number=this.auth.userID();
  username = this.auth.userType();
  message = '';
  messages: Message[] = [];
  isThisUser: boolean = false;

  constructor(
    private http: HttpClient,
    public auth: LoginService,
    public userService: DataServiceService
  ) {}

  ngOnInit(): void {
    this.getUserByID(this.auth.userID());
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('fefe358f37e6e32f25b2', {
      cluster: 'eu',
    });

    var channel = pusher.subscribe('chat');
    channel.bind('message', (data: Message) => {
      console.log(data.userId )
      this.messages.push(data);

    });
  }

  submit(): void {
    this.http
      .post(
        'https://fitnessarena-api20220806024507.azurewebsites.net/api/Chat',
        {
          username: this.username,
          message: this.message,
          imgurl: this.photoSrc,
          userId: this.auth.userID(),
        }
      )
      .subscribe(() => (this.message = ''));
  }

  change(event: any) {
    this.message = event.target.value;
  }

  photoSrc: any = '';
  //get user photo src by user id and show it in img
  //if user has no img display defult img
  getUserByID(userID: number) {
    this.userService.getUserByID(userID).subscribe((a) => {
      this.photoSrc =
        'https://fitnessarena-api20220806024507.azurewebsites.net/images/' +
        a.photoSrc;
      this.username = a.fname + ' ' + a.lname;
      document.getElementById('pp')?.setAttribute('src', this.photoSrc);
    });
  }

  enter(event: any) {
    if (event.key === 'Enter') {
      this.http
      .post(
        'https://fitnessarena-api20220806024507.azurewebsites.net/api/Chat',
        {
          username: this.username,
          message: this.message,
          imgurl: this.photoSrc,
          userId: this.auth.userID(),
        }
      )
      .subscribe(() => (this.message = ''));    }
  }
}
