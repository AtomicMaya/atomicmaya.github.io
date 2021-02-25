import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalHealthV1Component } from './mental-health-v1.component';

describe('MentalHealthV1Component', () => {
  let component: MentalHealthV1Component;
  let fixture: ComponentFixture<MentalHealthV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentalHealthV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentalHealthV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
