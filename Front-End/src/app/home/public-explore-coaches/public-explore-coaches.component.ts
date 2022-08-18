import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/user/data-service.service';
import { Users } from 'src/app/_models/users';

@Component({
  selector: 'app-public-explore-coaches',
  templateUrl: './public-explore-coaches.component.html',
  styleUrls: ['./public-explore-coaches.component.css'],
})
export class PublicExploreCoachesComponent implements OnInit {
  constructor(private data: DataServiceService) {}

  public ourCoaches: any = [];
  ngOnInit(): void {
    this.data.allCoaches().subscribe((d) => {
      this.ourCoaches = d;
    });
  }
  server: string =
    'https://fitnessarena-api20220806024507.azurewebsites.net/images/';
}
