import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb2021ConSiteComponent } from './con-site.component';

describe('FebConSiteComponent', () => {
  let component: Feb2021ConSiteComponent;
  let fixture: ComponentFixture<Feb2021ConSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb2021ConSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Feb2021ConSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
