import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov2020Beercon2Component } from './beercon2.component';

describe('Beercon2Component', () => {
  let component: Nov2020Beercon2Component;
  let fixture: ComponentFixture<Nov2020Beercon2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nov2020Beercon2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nov2020Beercon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
