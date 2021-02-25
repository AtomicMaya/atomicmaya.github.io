import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec2020Osint4jComponent } from './osint4j.component';

describe('Osint4jComponent', () => {
  let component: Dec2020Osint4jComponent;
  let fixture: ComponentFixture<Dec2020Osint4jComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec2020Osint4jComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dec2020Osint4jComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
