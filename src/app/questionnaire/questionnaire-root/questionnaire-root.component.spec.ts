import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireRootComponent } from './questionnaire-root.component';

describe('QuestionnaireRootComponent', () => {
  let component: QuestionnaireRootComponent;
  let fixture: ComponentFixture<QuestionnaireRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
