import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404/error404.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RouterModule } from '@angular/router';
import {ImageModule} from 'primeng/image';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    Error404Component,
    ProfileComponent,
    EditProfileComponent
  ],
  exports:[
  ],
  imports: [
    CommonModule,RouterModule,ImageModule,ReactiveFormsModule,DialogModule
  ]
})
export class PagesModule { }
