import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan2021DefconWorcesterTalkComponent } from './defcon-worcester-talk.component';

describe('JanDefconWorcesterTalkComponent', () => {
  let component: Jan2021DefconWorcesterTalkComponent;
  let fixture: ComponentFixture<Jan2021DefconWorcesterTalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan2021DefconWorcesterTalkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jan2021DefconWorcesterTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
