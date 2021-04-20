import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr2021CentralInfosecCtfHackTheMazeHardComponent } from './central-infosec-ctf-hack-the-maze-hard.component';

describe('CentralInfosecCtfHackTheMazeHardComponent', () => {
  let component: Apr2021CentralInfosecCtfHackTheMazeHardComponent;
  let fixture: ComponentFixture<Apr2021CentralInfosecCtfHackTheMazeHardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr2021CentralInfosecCtfHackTheMazeHardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apr2021CentralInfosecCtfHackTheMazeHardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
