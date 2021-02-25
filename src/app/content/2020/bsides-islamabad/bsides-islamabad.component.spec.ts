import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsidesIslamabadComponent } from './bsides-islamabad.component';

describe('BsidesIslamabadComponent', () => {
  let component: BsidesIslamabadComponent;
  let fixture: ComponentFixture<BsidesIslamabadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsidesIslamabadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsidesIslamabadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
