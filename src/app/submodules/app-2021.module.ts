import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Jan2021Goodbye2020NewYearPartyComponent } from '../content/2021/210102-goodbye2020-new-year-party/goodbye2020-new-year-party.component';
import { Jan2021MentalHealthComponent } from '../content/2021/210103-mental-health/mental-health.component';
import { Jan2021GatewayOsintTalkComponent } from '../content/2021/210105-gateway-osint-talk/gateway-osint-talk.component';
import { Jan2021WhatsappPrivacyPolicyHackSouthDiscussionComponent } from '../content/2021/210109-whatsapp-privacy-policy-hack-south-discussion/whatsapp-privacy-policy-hack-south-discussion.component';
import { Jan2021WhatsappPrivacyPolicyAnalysisComponent } from '../content/2021/210108-whatsapp-privacy-policy-analysis/whatsapp-privacy-policy-analysis.component';
import { Jan2021WhatsappEncaInterviewComponent } from '../content/2021/210119-whatsapp-enca-interview/whatsapp-enca-interview.component';
import { Jan2021DesignChoicesComponent } from '../content/2021/210123-website-design-choices/website-design-choices.component';
import { Jan2021LeedsEhsTalkComponent } from '../content/2021/210120-leeds-ehs-talk/leeds-ehs-talk.component';
import { Jan2021DefconWorcesterTalkComponent } from '../content/2021/210131-defcon-worcester-talk/defcon-worcester-talk.component';
import { Feb2021ConDeploymentComponent } from '../content/2021/210201-con-deployment/con-deployment.component';
import { Feb2021ConSiteComponent } from '../content/2021/210206-con-site/con-site.component';
import { Feb2021TracelabsWithHacksouthComponent } from '../content/2021/210222-tracelabs-with-hacksouth/tracelabs-with-hacksouth.component';

@NgModule({
  declarations: [
    Jan2021Goodbye2020NewYearPartyComponent,
    Jan2021MentalHealthComponent,
    Jan2021GatewayOsintTalkComponent,
    Jan2021WhatsappPrivacyPolicyHackSouthDiscussionComponent,
    Jan2021WhatsappPrivacyPolicyAnalysisComponent,
    Jan2021WhatsappEncaInterviewComponent,
    Jan2021DesignChoicesComponent,
    Jan2021LeedsEhsTalkComponent,
    Jan2021DefconWorcesterTalkComponent,
    Feb2021ConDeploymentComponent,
    Feb2021ConSiteComponent,
    Feb2021TracelabsWithHacksouthComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App2021Module { }
