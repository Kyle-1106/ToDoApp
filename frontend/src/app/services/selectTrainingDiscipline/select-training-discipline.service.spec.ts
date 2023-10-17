import { TestBed } from '@angular/core/testing';

import { SelectTrainingDisciplineService } from './select-training-discipline.service';

describe('SelectTrainingDisciplineService', () => {
  let service: SelectTrainingDisciplineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectTrainingDisciplineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
