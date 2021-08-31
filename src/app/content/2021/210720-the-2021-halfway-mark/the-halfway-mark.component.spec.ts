import { ComponentFixture, TestBed } from '@angular/core/testing';

import { July2021TheHalfwayMarkComponent } from './the-halfway-mark.component';

describe('July2021TheHalfwayMarkComponent', () => {
  let component: July2021TheHalfwayMarkComponent;
  let fixture: ComponentFixture<July2021TheHalfwayMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ July2021TheHalfwayMarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(July2021TheHalfwayMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
