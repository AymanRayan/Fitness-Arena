import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./core/side-bar/side-bar.component.css']
})
export class AppComponent {
  title = 'Fitness Garage';
  constructor(public auth:LoginService){}
  ngOnInit(): void {
  }
}

