import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan2021DesignChoicesComponent } from './website-design-choices.component';

describe('Feb2021DesignChoicesComponent', () => {
  let component: Jan2021DesignChoicesComponent;
  let fixture: ComponentFixture<Jan2021DesignChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan2021DesignChoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jan2021DesignChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
