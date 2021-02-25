import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappEncaInterviewComponent } from './whatsapp-enca-interview.component';

describe('WhatsappEncaInterviewComponent', () => {
  let component: WhatsappEncaInterviewComponent;
  let fixture: ComponentFixture<WhatsappEncaInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsappEncaInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappEncaInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
