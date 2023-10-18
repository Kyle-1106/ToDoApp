import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  // @Input() data = ''; 

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
