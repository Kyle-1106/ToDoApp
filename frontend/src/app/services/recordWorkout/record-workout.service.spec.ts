import { TestBed } from '@angular/core/testing';

import { RecordWorkoutService } from './record-workout.service';

describe('RecordWorkoutService', () => {
  let service: RecordWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
