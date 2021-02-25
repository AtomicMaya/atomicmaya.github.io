import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb2021TracelabsWithHacksouthComponent } from './tracelabs-with-hacksouth.component';

describe('FebTracelabsWithHacksouthComponent', () => {
  let component: Feb2021TracelabsWithHacksouthComponent;
  let fixture: ComponentFixture<Feb2021TracelabsWithHacksouthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb2021TracelabsWithHacksouthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Feb2021TracelabsWithHacksouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
