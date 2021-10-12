import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct2021DigitalOverdoseWriteupCakeComponent } from './digital-overdose-official-writeup-2-a-lying-cake.component';

describe('Oct2021DigitalOverdoseWriteupCakeComponent', () => {
  let component: Oct2021DigitalOverdoseWriteupCakeComponent;
  let fixture: ComponentFixture<Oct2021DigitalOverdoseWriteupCakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct2021DigitalOverdoseWriteupCakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Oct2021DigitalOverdoseWriteupCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
