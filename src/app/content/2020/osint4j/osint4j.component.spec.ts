import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Osint4jComponent } from './osint4j.component';

describe('Osint4jComponent', () => {
  let component: Osint4jComponent;
  let fixture: ComponentFixture<Osint4jComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Osint4jComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Osint4jComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
