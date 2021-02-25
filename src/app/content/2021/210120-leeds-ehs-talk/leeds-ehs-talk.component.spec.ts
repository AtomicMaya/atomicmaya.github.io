import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan2021LeedsEhsTalkComponent } from './leeds-ehs-talk.component';

describe('JanLeedsEhsTalkComponent', () => {
  let component: Jan2021LeedsEhsTalkComponent;
  let fixture: ComponentFixture<Jan2021LeedsEhsTalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan2021LeedsEhsTalkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jan2021LeedsEhsTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
