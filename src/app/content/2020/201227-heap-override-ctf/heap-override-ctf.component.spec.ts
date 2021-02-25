import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec2020HeapOverrideCTFComponent } from './heap-override-ctf.component';

describe('HeapOverrideCTFComponent', () => {
  let component: Dec2020HeapOverrideCTFComponent;
  let fixture: ComponentFixture<Dec2020HeapOverrideCTFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec2020HeapOverrideCTFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dec2020HeapOverrideCTFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
