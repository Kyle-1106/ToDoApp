import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordWorkoutComponent } from './record-workout.component';

describe('RecordWorkoutComponent', () => {
  let component: RecordWorkoutComponent;
  let fixture: ComponentFixture<RecordWorkoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordWorkoutComponent]
    });
    fixture = TestBed.createComponent(RecordWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
