import { RecordService } from './../../services/record/record.service';
import { Component, Input, Output } from '@angular/core';
import { WorkoutLog } from 'src/app/interfaces/workoutLog.interface';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  // @Input() showButton:boolean=false; 
  showButton:boolean;
  @Input() selectedWorkoutLogs:WorkoutLog[];
  chartData: any[] = [];
  showChart:boolean;

  constructor(private recordService:RecordService){}

  ngOnInit(){
    this.recordService.showButton$.subscribe(data => {
      this.showButton = data;
      // データが変更されたときに実行する処理
    }); 
    this.recordService.showChart$.subscribe(data => {
      this.showChart = data;
      // データが変更されたときに実行する処理
    }); 

  }

  createChart(){
    const groupedData=new Map<string,number>();
    this.selectedWorkoutLogs.forEach((item:WorkoutLog)=>{
      const date=new Date(item.created_at).toLocaleDateString();
      const existingTotal = groupedData.get(date) || 0;
      groupedData.set(date, existingTotal + item.RM);

      this.chartData = [];
      groupedData.forEach((value, key) => {
      this.chartData.push({
        name: key,
        value: value,
      });
    });
    this.showChart=true
    this.recordService.setShowChart(this.showChart);
    this.showButton=false;
    this.recordService.setShowButton(this.showButton);
    })
  }
  


  // グラフの表示サイズ
  view: any[] = [700, 400];

  // 設定
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '日付';
  showYAxisLabel = true;
  yAxisLabel = 'RM';

}
