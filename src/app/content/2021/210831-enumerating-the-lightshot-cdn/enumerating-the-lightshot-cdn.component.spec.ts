import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug2021EnumeratingTheLightshotCdnComponent } from './enumerating-the-lightshot-cdn.component';

describe('Aug2021EnumeratingTheLightshotCdnComponent', () => {
  let component: Aug2021EnumeratingTheLightshotCdnComponent;
  let fixture: ComponentFixture<Aug2021EnumeratingTheLightshotCdnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug2021EnumeratingTheLightshotCdnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aug2021EnumeratingTheLightshotCdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
