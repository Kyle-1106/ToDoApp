import { TestBed } from '@angular/core/testing';

import { SelectBodyPartService } from './select-body-part.service';

describe('SelectBodyPartService', () => {
  let service: SelectBodyPartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectBodyPartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
