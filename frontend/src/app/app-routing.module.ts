import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent}from "./component/login/login.component";
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { authGuard } from './guard/auth.guard';
import { SelectBodypartComponent } from './component/select-bodypart/select-bodypart.component';
import { SelectTrainingDisciplineComponent } from './component/select-training-discipline/select-training-discipline.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomeComponent,canActivate:[authGuard]},
  {path:"home/workout/selectBodyPart",component:SelectBodypartComponent,canActivate:[authGuard]},
  {path:"home/workout/selectTrainingDiscipline",component:SelectTrainingDisciplineComponent,canActivate:[authGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  // //後で404エラーページ作成
  // { path: '**', redirectTo: '/login' } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
