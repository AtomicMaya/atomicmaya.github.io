import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov2020BsidesIslamabadComponent } from './bsides-islamabad.component';

describe('BsidesIslamabadComponent', () => {
  let component: Nov2020BsidesIslamabadComponent;
  let fixture: ComponentFixture<Nov2020BsidesIslamabadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov2020BsidesIslamabadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nov2020BsidesIslamabadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
