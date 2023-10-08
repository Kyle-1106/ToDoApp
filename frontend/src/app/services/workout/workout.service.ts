import { Injectable, importProvidersFrom } from '@angular/core';
import { HttpOptions } from 'src/app/config/httpOption';
import { HttpClient } from '@angular/common/http';
import { BodyPart } from 'src/app/models/bodyParts.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http:HttpClient,private httpoption:HttpOptions) { }
  readonly httpOpions=this.httpoption.httpOptions;
  readonly url="http://localhost:3001/workout/getBodyParts"
  getBodyParts():Observable<BodyPart[]>{
    return this.http.get<BodyPart[]>(this.url).pipe(
      catchError(error=>{
        return throwError("部位の取得に失敗しました")
      })
      );
  }
}
