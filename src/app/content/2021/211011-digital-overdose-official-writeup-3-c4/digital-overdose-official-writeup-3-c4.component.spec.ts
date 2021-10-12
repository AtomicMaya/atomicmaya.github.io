import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct2021DigitalOverdoseWriteupC4Component } from './digital-overdose-official-writeup-3-c4.component';

describe('Oct2021DigitalOverdoseWriteupC4Component', () => {
  let component: Oct2021DigitalOverdoseWriteupC4Component;
  let fixture: ComponentFixture<Oct2021DigitalOverdoseWriteupC4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct2021DigitalOverdoseWriteupC4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Oct2021DigitalOverdoseWriteupC4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
