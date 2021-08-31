import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr2021DigitalOverdoseConferenceComponent } from './digital-overdose-conference.component';

describe('Apr2021DigitalOverdoseConferenceComponent', () => {
  let component: Apr2021DigitalOverdoseConferenceComponent;
  let fixture: ComponentFixture<Apr2021DigitalOverdoseConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr2021DigitalOverdoseConferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apr2021DigitalOverdoseConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
