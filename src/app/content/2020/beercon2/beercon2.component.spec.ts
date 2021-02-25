import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Beercon2Component } from './beercon2.component';

describe('Beercon2Component', () => {
  let component: Beercon2Component;
  let fixture: ComponentFixture<Beercon2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Beercon2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Beercon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
