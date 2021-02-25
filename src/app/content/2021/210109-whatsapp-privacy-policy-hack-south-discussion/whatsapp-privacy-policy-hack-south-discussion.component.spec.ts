import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan2021WhatsappPrivacyPolicyHackSouthDiscussionComponent } from './whatsapp-privacy-policy-hack-south-discussion.component';

describe('WhatsappPrivacyPolicyHackSouthDiscussionComponent', () => {
  let component: Jan2021WhatsappPrivacyPolicyHackSouthDiscussionComponent;
  let fixture: ComponentFixture<Jan2021WhatsappPrivacyPolicyHackSouthDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan2021WhatsappPrivacyPolicyHackSouthDiscussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jan2021WhatsappPrivacyPolicyHackSouthDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
