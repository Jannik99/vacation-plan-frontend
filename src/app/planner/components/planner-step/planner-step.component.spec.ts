import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerStepComponent } from './planner-step.component';

describe('PlannerStepComponent', () => {
  let component: PlannerStepComponent;
  let fixture: ComponentFixture<PlannerStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
