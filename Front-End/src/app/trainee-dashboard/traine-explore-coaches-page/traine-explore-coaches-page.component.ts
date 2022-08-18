import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/user/data-service.service';

@Component({
  selector: 'app-traine-explore-coaches-page',
  templateUrl: './traine-explore-coaches-page.component.html',
  styleUrls: ['./traine-explore-coaches-page.component.css']
})
export class TraineExploreCoachesPageComponent implements OnInit {

  constructor(private data:DataServiceService) { }

  public ourCoaches:any =[];
  ngOnInit(): void {
    this.data.allCoaches().subscribe(
      (d) => {
        this.ourCoaches = d;
      }
    )

}}
