import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { DataServiceService } from 'src/app/services/user/data-service.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

  constructor(private data:DataServiceService , private route:Router ,private auth:LoginService) { }

  ngOnInit(): void {
    this.showClients();
  }
  clients:any =[]
  showClients(){
    this.data.getClintes(this.auth.userID()).subscribe((d) => {
      this.clients = d;
    })
  }
}
