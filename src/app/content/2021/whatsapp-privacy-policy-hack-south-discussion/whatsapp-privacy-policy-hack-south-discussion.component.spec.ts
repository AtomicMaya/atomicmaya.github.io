import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappPrivacyPolicyHackSouthDiscussionComponent } from './whatsapp-privacy-policy-hack-south-discussion.component';

describe('WhatsappPrivacyPolicyHackSouthDiscussionComponent', () => {
  let component: WhatsappPrivacyPolicyHackSouthDiscussionComponent;
  let fixture: ComponentFixture<WhatsappPrivacyPolicyHackSouthDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsappPrivacyPolicyHackSouthDiscussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappPrivacyPolicyHackSouthDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
