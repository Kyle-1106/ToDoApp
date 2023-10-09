import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BodyPart } from 'src/app/models/bodyParts.model';
import { WorkoutService } from 'src/app/services/workout/workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent {
  errorMessage:string;  
  bodyPart:BodyPart[];
  selectedBodyPart:string;
  // registWorkoutForm:FormGroup;
  // bodyPartName:FormControl;
  // traininigDisciplinesName:FormControl;
  // weight:FormControl;
  // reps:FormControl;
  // memo:FormControl;

  constructor(private formBuilder:FormBuilder,private workoutService:WorkoutService){
    //バリデーション設定
    // this.bodyPartName=new FormControl();
    
  }

  ngOnInit(){
  //セレクトボックス内容取得
    //部位名取得
    this.workoutService.getBodyParts().subscribe({
      next:(response)=>{
        console.log('部位取得成功:', response);
        this.bodyPart=response;

      },
      error:(error)=>{
        console.error('Error creating user:', error);
        this.errorMessage=error;

      }
    })
  }


}
