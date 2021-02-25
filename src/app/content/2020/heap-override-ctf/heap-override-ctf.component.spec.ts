import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeapOverrideCTFComponent } from './heap-override-ctf.component';

describe('HeapOverrideCTFComponent', () => {
  let component: HeapOverrideCTFComponent;
  let fixture: ComponentFixture<HeapOverrideCTFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeapOverrideCTFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeapOverrideCTFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
