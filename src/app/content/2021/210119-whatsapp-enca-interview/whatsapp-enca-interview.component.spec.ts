import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan2021WhatsappEncaInterviewComponent } from './whatsapp-enca-interview.component';

describe('WhatsappEncaInterviewComponent', () => {
  let component: Jan2021WhatsappEncaInterviewComponent;
  let fixture: ComponentFixture<Jan2021WhatsappEncaInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan2021WhatsappEncaInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jan2021WhatsappEncaInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
