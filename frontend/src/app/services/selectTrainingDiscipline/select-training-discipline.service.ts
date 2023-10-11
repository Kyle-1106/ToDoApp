import { Injectable } from '@angular/core';
import { HttpOptions } from 'src/app/config/httpOption';
import { HttpClient} from '@angular/common/http';
import { TrainingDiscipline } from 'src/app/models/trainingDiscipline.model';
@Injectable({
  providedIn: 'root'
})
export class SelectTrainingDisciplineService {
  constructor(private http:HttpClient,private httpoption:HttpOptions) { }
  readonly httpOpions=this.httpoption.httpOptions;
  readonly url="http://localhost:3001/workout/getTrainingDisciplines";

  getTrainingDisciplines(bodyPart:string){
    const params={name:bodyPart};
    console.log(params)
   
    console.log(this.http.get<TrainingDiscipline[]>(this.url,{params}));
    return this.http.get<TrainingDiscipline[]>(this.url,{params});
  }

}
