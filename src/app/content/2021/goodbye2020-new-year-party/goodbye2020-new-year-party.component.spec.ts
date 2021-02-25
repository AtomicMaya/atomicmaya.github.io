import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goodbye2020NewYearPartyComponent } from './goodbye2020-new-year-party.component';

describe('Goodbye2020NewYearPartyComponent', () => {
  let component: Goodbye2020NewYearPartyComponent;
  let fixture: ComponentFixture<Goodbye2020NewYearPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Goodbye2020NewYearPartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Goodbye2020NewYearPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
