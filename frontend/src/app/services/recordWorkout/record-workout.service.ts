import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpOptions } from 'src/app/config/httpOption';
import { Workout } from 'src/app/models/workout.model';
import { WorkoutLog } from 'src/app/models/workoutLog.model';

@Injectable({
  providedIn: 'root'
})
export class RecordWorkoutService {

  constructor(private http:HttpClient,private httpoption:HttpOptions) { }

  readonly httpoptions=this.httpoption.httpOptions;
  readonly registarurl="http://localhost:3001/workout/recordWorkout"
  readonly geturl="http://localhost:3001/workout/getWorkout"

  //ワークアウト登録処理
  recordWorkout(workoutInfo:any):Observable<Workout>{
    return this.http.post<Workout>(this.registarurl,workoutInfo,this.httpoptions)
  }

  //ワークアウト取得
  getWorkout(userId:number):Observable<WorkoutLog[]>{
    const params={userId:userId};
    return this.http.get<WorkoutLog[]>(this.geturl,{params})
    .pipe(
      catchError((error)=>{
        console.log(error)
        return throwError("ワークアウトの取得に失敗しました");
      }
      ))

  }
}
