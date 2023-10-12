import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpOptions } from 'src/app/config/httpOption';
import { Workout } from 'src/app/models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class RecordWorkoutService {

  constructor(private http:HttpClient,private httpoption:HttpOptions) { }

  readonly httpoptions=this.httpoption.httpOptions;
  readonly url="http://localhost:3001/workout/recordWorkout"

  //ワークアウト登録処理
  recordWorkout(workoutInfo:any):Observable<Workout>{
    return this.http.post<Workout>(this.url,workoutInfo,this.httpoptions)
  }
}
