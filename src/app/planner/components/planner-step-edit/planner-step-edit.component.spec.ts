import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerStepEditComponent } from './planner-step-edit.component';

describe('PlannerStepEditComponent', () => {
  let component: PlannerStepEditComponent;
  let fixture: ComponentFixture<PlannerStepEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerStepEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerStepEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
