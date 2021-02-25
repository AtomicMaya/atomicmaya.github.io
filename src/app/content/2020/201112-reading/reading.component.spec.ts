import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov2020ReadingComponent } from './reading.component';

describe('Reading2020Component', () => {
  let component: Nov2020ReadingComponent;
  let fixture: ComponentFixture<Nov2020ReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov2020ReadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nov2020ReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
