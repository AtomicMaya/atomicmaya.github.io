import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov2020MentoringComponent } from './mentoring.component';

describe('MentoringComponent', () => {
  let component: Nov2020MentoringComponent;
  let fixture: ComponentFixture<Nov2020MentoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov2020MentoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nov2020MentoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
