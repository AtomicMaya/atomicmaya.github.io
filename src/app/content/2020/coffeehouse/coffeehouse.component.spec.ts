import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeehouseComponent } from './coffeehouse.component';

describe('CoffeehouseComponent', () => {
  let component: CoffeehouseComponent;
  let fixture: ComponentFixture<CoffeehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
