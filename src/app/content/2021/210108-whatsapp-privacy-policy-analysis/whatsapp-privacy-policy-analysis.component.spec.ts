import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan2021WhatsappPrivacyPolicyAnalysisComponent } from './whatsapp-privacy-policy-analysis.component';

describe('WhatsappPrivacyPolicyAnalysisComponent', () => {
  let component: Jan2021WhatsappPrivacyPolicyAnalysisComponent;
  let fixture: ComponentFixture<Jan2021WhatsappPrivacyPolicyAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan2021WhatsappPrivacyPolicyAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jan2021WhatsappPrivacyPolicyAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
