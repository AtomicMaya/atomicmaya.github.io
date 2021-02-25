import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappPrivacyPolicyAnalysisComponent } from './whatsapp-privacy-policy-analysis.component';

describe('WhatsappPrivacyPolicyAnalysisComponent', () => {
  let component: WhatsappPrivacyPolicyAnalysisComponent;
  let fixture: ComponentFixture<WhatsappPrivacyPolicyAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsappPrivacyPolicyAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappPrivacyPolicyAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
