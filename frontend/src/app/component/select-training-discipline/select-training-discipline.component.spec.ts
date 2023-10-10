import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTrainingDisciplineComponent } from './select-training-discipline.component';

describe('SelectTrainingDisciplineComponent', () => {
  let component: SelectTrainingDisciplineComponent;
  let fixture: ComponentFixture<SelectTrainingDisciplineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectTrainingDisciplineComponent]
    });
    fixture = TestBed.createComponent(SelectTrainingDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
