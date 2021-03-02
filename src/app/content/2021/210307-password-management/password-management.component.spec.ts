import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb2021PasswordManagementComponent } from './password-management.component';

describe('Feb2021PasswordManagementComponent', () => {
  let component: Feb2021PasswordManagementComponent;
  let fixture: ComponentFixture<Feb2021PasswordManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb2021PasswordManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Feb2021PasswordManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
