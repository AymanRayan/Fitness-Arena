import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomenavComponent } from './homenav/homenav.component';
import { RegiTraineeComponent } from './regi-trainee/regi-trainee.component';
import { RegiCoachComponent } from './regi-coach/regi-coach.component';
import { PublicExploreCoachesComponent } from './public-explore-coaches/public-explore-coaches.component';
import { CoachbundleComponent } from './coachbundle/coachbundle.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomenavComponent,
    RegiTraineeComponent,
    RegiCoachComponent,
    PublicExploreCoachesComponent,
    CoachbundleComponent
  ],
  exports:[
    LoginComponent,HomenavComponent
  ],
  imports: [
    CommonModule,RouterModule,FormsModule,ReactiveFormsModule
  ]
})
export class HomeModule {}
