import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct2021DigitalOverdoseWriteupOutageComponent } from './digital-overdose-official-writeup-1-outage.component';

describe('Oct2021DigitalOverdoseWriteupOutageComponent', () => {
  let component: Oct2021DigitalOverdoseWriteupOutageComponent;
  let fixture: ComponentFixture<Oct2021DigitalOverdoseWriteupOutageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct2021DigitalOverdoseWriteupOutageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Oct2021DigitalOverdoseWriteupOutageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
