import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

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
import { Feb2021PasswordManagementComponent } from '../content/2021/210307-password-management/password-management.component';
import { Apr2021CentralInfosecCtfHackTheMazeHardComponent } from '../content/2021/210420-central-infosec-ctf-hack-the-maze-hard/central-infosec-ctf-hack-the-maze-hard.component';
import { Apr2021CentralInfosecCtfAllComponent } from '../content/2021/210420-central-infosec-ctf-all/central-infosec-ctf-all.component';
import { Apr2021CentralInfosecCtfPythonComponent } from '../content/2021/210420-central-infosec-ctf-python/central-infosec-ctf-python.component';
import { Apr2021CentralInfosecCtfHackTheStaticHardComponent } from '../content/2021/210420-central-infosec-ctf-hack-the-static-hard/central-infosec-ctf-hack-the-static-hard.component';
import { Apr2021DigitalOverdoseConferenceComponent } from '../content/210429-digital-overdose-conference/digital-overdose-conference.component';
import { July2021TheHalfwayMarkComponent } from '../content/210720-the-2021-halfway-mark/the-halfway-mark.component';

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
    Feb2021PasswordManagementComponent,
    Apr2021CentralInfosecCtfHackTheMazeHardComponent,
    Apr2021CentralInfosecCtfAllComponent,
    Apr2021CentralInfosecCtfPythonComponent,
    Apr2021CentralInfosecCtfHackTheStaticHardComponent,
    Apr2021DigitalOverdoseConferenceComponent,
    July2021TheHalfwayMarkComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MarkdownModule.forChild()
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App2021Module { }
