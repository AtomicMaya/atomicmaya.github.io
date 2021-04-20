import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr2021CentralInfosecCtfAllComponent } from './central-infosec-ctf-all.component';

describe('CentralInfosecCtfAllComponent', () => {
  let component: Apr2021CentralInfosecCtfAllComponent;
  let fixture: ComponentFixture<Apr2021CentralInfosecCtfAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr2021CentralInfosecCtfAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apr2021CentralInfosecCtfAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
