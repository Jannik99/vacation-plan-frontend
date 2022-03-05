import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionButtonsComponent } from './function-buttons.component';

describe('FunctionButtonsComponent', () => {
  let component: FunctionButtonsComponent;
  let fixture: ComponentFixture<FunctionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
