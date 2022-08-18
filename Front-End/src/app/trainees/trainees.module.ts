import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAllComponent } from './show-all/show-all.component';
import { TraineeDetailsComponent } from './trainee-details/trainee-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ShowAllComponent,
    TraineeDetailsComponent
  ],
  exports:[
    ShowAllComponent,
    TraineeDetailsComponent
  ],
  imports: [
    CommonModule,RouterModule,FormsModule,ReactiveFormsModule
  ]
})
export class TraineesModule { }
