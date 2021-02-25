import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec2020CoffeehouseComponent } from './coffeehouse.component';

describe('CoffeehouseComponent', () => {
  let component: Dec2020CoffeehouseComponent;
  let fixture: ComponentFixture<Dec2020CoffeehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec2020CoffeehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dec2020CoffeehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
