import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraineeSideBarComponent } from './trainee-side-bar/trainee-side-bar.component';
import { RouterModule } from '@angular/router';
import { TraineeProfilePageComponent } from './trainee-profile-page/trainee-profile-page.component';
import { TraineeHomePageComponent } from './trainee-home-page/trainee-home-page.component';
import { TraineeProgramPageComponent } from './trainee-program-page/trainee-program-page.component';
import { TraineeCalenderPageComponent } from './trainee-calender-page/trainee-calender-page.component';
import { TraineeContactCoachPageComponent } from './trainee-contact-coach-page/trainee-contact-coach-page.component';
import { TraineInbodyPageComponent } from './traine-inbody-page/traine-inbody-page.component';
import { TraineExploreCoachesPageComponent } from './traine-explore-coaches-page/traine-explore-coaches-page.component';
import { TraineeAddInbodyPageComponent } from './trainee-add-inbody-page/trainee-add-inbody-page.component';
import { TraineeEditProfilePageComponent } from './trainee-edit-profile-page/trainee-edit-profile-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TraineeProgramDetailsComponent } from './trainee-program-details/trainee-program-details.component';
import { CoachEnrollComponent } from './coach-enroll/coach-enroll.component';
import { ConfirmEnrollmentComponent } from './confirm-enrollment/confirm-enrollment.component';

@NgModule({
  declarations: [
    TraineeSideBarComponent,
    TraineeProfilePageComponent,
    TraineeHomePageComponent,
    TraineeProgramPageComponent,
    TraineeCalenderPageComponent,
    TraineeContactCoachPageComponent,
    TraineInbodyPageComponent,
    TraineInbodyPageComponent,
    TraineExploreCoachesPageComponent,
    TraineeAddInbodyPageComponent,
    TraineeEditProfilePageComponent,
    TraineeProgramDetailsComponent,
    CoachEnrollComponent,
    ConfirmEnrollmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,ReactiveFormsModule
  ],
  exports: [TraineeSideBarComponent, TraineeProfilePageComponent,CoachEnrollComponent],
})
export class TraineeDashboardModule {}
