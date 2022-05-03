import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerRootComponent } from './planner-root.component';

describe('PlannerRootComponent', () => {
  let component: PlannerRootComponent;
  let fixture: ComponentFixture<PlannerRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlannerRootComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
