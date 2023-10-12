import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpOptions } from 'src/app/config/httpOption';
import { BodyPart } from 'src/app/models/bodyParts.model';

@Injectable({
  providedIn: 'root'
})
export class SelectBodyPartService {

  constructor(private http:HttpClient,private httpoption:HttpOptions) { }
  readonly httpOptions=this.httpoption.httpOptions
  readonly url="http://localhost:3001/workout/getBodyPartId"

  getBodyPartId(bodyPart:string){
    const params={name:bodyPart};
    return this.http.get<BodyPart>(this.url,{params})
  }
}
