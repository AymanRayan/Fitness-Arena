import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { ProgramsModule } from './programs/programs.module';
import { TraineesModule } from './trainees/trainees.module';
import { TraineeDashboardModule } from './trainee-dashboard/trainee-dashboard.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterInterceptor } from './services/auth-inter.interceptor';
import { MultiSelectModule } from 'primeng/multiselect';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    PagesModule,
    TraineesModule,
    ProgramsModule,
    TraineeDashboardModule,
    HomeModule,
    HttpClientModule,
    MultiSelectModule,
    CommonModule,
    DynamicDialogModule,
    ToastModule,
    TableModule,
    ButtonModule,ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
