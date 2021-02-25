import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan2021MentalHealthComponent } from './mental-health.component';

describe('MentalHealthV1Component', () => {
  let component: Jan2021MentalHealthComponent;
  let fixture: ComponentFixture<Jan2021MentalHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan2021MentalHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jan2021MentalHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
