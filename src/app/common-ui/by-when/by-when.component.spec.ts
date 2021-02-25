import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByWhenComponent } from './by-when.component';

describe('ByWhenComponent', () => {
  let component: ByWhenComponent;
  let fixture: ComponentFixture<ByWhenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByWhenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
