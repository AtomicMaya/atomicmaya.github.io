import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhenComponent } from './when.component';

describe('ByWhenComponent', () => {
  let component: WhenComponent;
  let fixture: ComponentFixture<WhenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
