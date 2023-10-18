import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  @Input() showButton:boolean=false; 
  @Input() selectedWorkoutLogs:any[];
  chartData: any[] = [];
  showChart:boolean;

  createChart(){
    const groupedData=new Map<string,number>();
    this.selectedWorkoutLogs.forEach((item:any)=>{
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
      return groupedData;
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
