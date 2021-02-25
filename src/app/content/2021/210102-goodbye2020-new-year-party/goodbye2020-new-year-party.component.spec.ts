import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan2021Goodbye2020NewYearPartyComponent } from './goodbye2020-new-year-party.component';

describe('Goodbye2020NewYearPartyComponent', () => {
  let component: Jan2021Goodbye2020NewYearPartyComponent;
  let fixture: ComponentFixture<Jan2021Goodbye2020NewYearPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan2021Goodbye2020NewYearPartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jan2021Goodbye2020NewYearPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
