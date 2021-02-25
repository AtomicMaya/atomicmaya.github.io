import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTagCountComponent } from './list-tag-count.component';

describe('ListTagCountComponent', () => {
  let component: ListTagCountComponent;
  let fixture: ComponentFixture<ListTagCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTagCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTagCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
