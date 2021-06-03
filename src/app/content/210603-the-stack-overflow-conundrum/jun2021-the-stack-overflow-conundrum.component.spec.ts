import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun2021TheStackOverflowConundrumComponent } from './jun2021-the-stack-overflow-conundrum.component';

describe('Jun2021TheStackOverflowConundrumComponent', () => {
  let component: Jun2021TheStackOverflowConundrumComponent;
  let fixture: ComponentFixture<Jun2021TheStackOverflowConundrumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun2021TheStackOverflowConundrumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jun2021TheStackOverflowConundrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
