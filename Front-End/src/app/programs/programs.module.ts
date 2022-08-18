import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgShowAllComponent } from './prog-show-all/prog-show-all.component';
import { ProgAddNewComponent } from './prog-add-new/prog-add-new.component';
import { ProgEditComponent } from './prog-edit/prog-edit.component';
import { ProgshowOneComponent } from './progshow-one/progshow-one.component';
import { RouterModule } from '@angular/router';
import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChipsModule} from 'primeng/chips';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';
@NgModule({
  declarations: [
    ProgShowAllComponent,
    ProgAddNewComponent,
    ProgEditComponent,
    ProgshowOneComponent,
  ],
  exports:[
    ProgShowAllComponent,
    ProgAddNewComponent,
    ProgEditComponent,ProgshowOneComponent,BrowserAnimationsModule
  ],
  imports: [
    CommonModule,RouterModule,MultiSelectModule,FormsModule,BrowserAnimationsModule,BrowserModule,
    ChipsModule,ReactiveFormsModule,CommonModule,
    DialogModule
  ]
})
export class ProgramsModule { }
