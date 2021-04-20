import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Oct2020ConintComponent } from './conint.component';

describe('ConintComponent', () => {
  let component: Oct2020ConintComponent;
  let fixture: ComponentFixture<Oct2020ConintComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Oct2020ConintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oct2020ConintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
