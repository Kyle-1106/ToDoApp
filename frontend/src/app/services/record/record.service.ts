import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor() {
    this.showButton.next(false);
    this.showChart.next(false);
  }
  private showButton = new BehaviorSubject<any>('Initial Data');
  private showChart= new BehaviorSubject<any>('Initial Data');
  showButton$ = this.showButton.asObservable();
  showChart$=this.showChart.asObservable();

  setShowButton(data:boolean){
    this.showButton.next(data);
  }
  setShowChart(data:boolean){
    this.showChart.next(data);    
  }
}
