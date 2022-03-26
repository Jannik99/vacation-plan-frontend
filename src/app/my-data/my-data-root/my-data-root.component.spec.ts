import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDataRootComponent } from './my-data-root.component';

describe('MyDataRootComponent', () => {
  let component: MyDataRootComponent;
  let fixture: ComponentFixture<MyDataRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDataRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDataRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
