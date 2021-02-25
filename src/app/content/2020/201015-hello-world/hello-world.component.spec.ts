import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct2020HelloWorldComponent } from './hello-world.component';

describe('HelloWorldComponent', () => {
  let component: Oct2020HelloWorldComponent;
  let fixture: ComponentFixture<Oct2020HelloWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oct2020HelloWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oct2020HelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
