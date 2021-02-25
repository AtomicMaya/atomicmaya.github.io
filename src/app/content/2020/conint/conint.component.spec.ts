import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConintComponent } from './conint.component';

describe('ConintComponent', () => {
  let component: ConintComponent;
  let fixture: ComponentFixture<ConintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
