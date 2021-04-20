import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr2021CentralInfosecCtfPythonComponent } from './central-infosec-ctf-python.component';

describe('CentralInfosecCtfPythonComponent', () => {
  let component: Apr2021CentralInfosecCtfPythonComponent;
  let fixture: ComponentFixture<Apr2021CentralInfosecCtfPythonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr2021CentralInfosecCtfPythonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apr2021CentralInfosecCtfPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
