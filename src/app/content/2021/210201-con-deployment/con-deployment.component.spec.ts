import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb2021ConDeploymentComponent } from './con-deployment.component';

describe('FebConDeploymentComponent', () => {
  let component: Feb2021ConDeploymentComponent;
  let fixture: ComponentFixture<Feb2021ConDeploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb2021ConDeploymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Feb2021ConDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
