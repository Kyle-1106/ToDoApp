import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './component/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { SelectBodypartComponent } from './component/select-bodypart/select-bodypart.component';
import { SelectTrainingDisciplineComponent } from './component/select-training-discipline/select-training-discipline.component';
import { RecordWorkoutComponent } from './component/record-workout/record-workout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTrainingDisciplineModalComponent } from './component/modal/add-training-discipline-modal/add-training-discipline-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RecordComponent } from './component/record/record.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SelectBodypartComponent,
    SelectTrainingDisciplineComponent,
    RecordWorkoutComponent,
    AddTrainingDisciplineModalComponent,
    RecordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
