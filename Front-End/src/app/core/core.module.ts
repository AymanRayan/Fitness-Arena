import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SideBarComponent
  ],
  exports:[
    SideBarComponent
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class CoreModule { }
