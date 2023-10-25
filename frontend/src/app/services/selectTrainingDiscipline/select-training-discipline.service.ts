import { Injectable } from '@angular/core';
import { HttpOptions } from 'src/app/config/httpOption';
import { HttpClient} from '@angular/common/http';
import { TrainingDiscipline } from 'src/app/interfaces/trainingDiscipline.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SelectTrainingDisciplineService {
  constructor(private http:HttpClient,private httpoption:HttpOptions) { }
  readonly httpOpions=this.httpoption.httpOptions;
  readonly geturl="http://localhost:3001/workout/getTrainingDisciplines";
  readonly registurl="http://localhost:3001/workout/registTrainingDiscipline";

  //種目取得
  getTrainingDisciplines(bodyPartId:number){
    const params={id:bodyPartId};
    return this.http.get<TrainingDiscipline[]>(this.geturl,{params});
  }

  //種目登録
  registarTrainingDisciplines(bodyPartId:number,bodyPartName:string):Observable<TrainingDiscipline>{
    const registaredDisciplineParams={bodyPartId:bodyPartId,bodyPartName:bodyPartName};
    return this.http.post<TrainingDiscipline>(this.registurl,registaredDisciplineParams)
  }



}
