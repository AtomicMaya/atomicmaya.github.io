import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr2021CentralInfosecCtfHackTheStaticHardComponent } from './central-infosec-ctf-hack-the-static-hard.component';

describe('CentralInfosecCtfHackTheStaticHardComponent', () => {
  let component: Apr2021CentralInfosecCtfHackTheStaticHardComponent;
  let fixture: ComponentFixture<Apr2021CentralInfosecCtfHackTheStaticHardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr2021CentralInfosecCtfHackTheStaticHardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apr2021CentralInfosecCtfHackTheStaticHardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
