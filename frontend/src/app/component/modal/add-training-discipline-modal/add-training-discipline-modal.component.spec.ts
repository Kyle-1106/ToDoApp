import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainingDisciplineModalComponent } from './add-training-discipline-modal.component';

describe('AddTrainingDisciplineModalComponent', () => {
  let component: AddTrainingDisciplineModalComponent;
  let fixture: ComponentFixture<AddTrainingDisciplineModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTrainingDisciplineModalComponent]
    });
    fixture = TestBed.createComponent(AddTrainingDisciplineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
