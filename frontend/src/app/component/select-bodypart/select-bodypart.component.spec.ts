import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBodypartComponent } from './select-bodypart.component';

describe('SelectBodypartComponent', () => {
  let component: SelectBodypartComponent;
  let fixture: ComponentFixture<SelectBodypartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectBodypartComponent]
    });
    fixture = TestBed.createComponent(SelectBodypartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
