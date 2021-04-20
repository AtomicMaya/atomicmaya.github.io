// tslint:disable: no-string-literal
import { Routes } from '@angular/router';
import { TAG_COMMUNITY, TAG_PERSONAL, TAG_TALKS, TAG_OSINT, TAG_INFOSEC, TAG_PRIVACY,
  TAG_MEDIA, TAG_DEVELOPMENT, TAG_WEB, TAG_IOT, TAG_CYBERSEC, TAG_CTF, TAG_WRITEUP } from 'src/app/utils/tags';
import { Jan2021Goodbye2020NewYearPartyComponent } from 'src/app/content/2021/210102-goodbye2020-new-year-party/goodbye2020-new-year-party.component';

import { Jan2021WhatsappEncaInterviewComponent } from 'src/app/content/2021/210119-whatsapp-enca-interview/whatsapp-enca-interview.component';
import { Jan2021WhatsappPrivacyPolicyHackSouthDiscussionComponent } from 'src/app/content/2021/210109-whatsapp-privacy-policy-hack-south-discussion/whatsapp-privacy-policy-hack-south-discussion.component';
import { Jan2021WhatsappPrivacyPolicyAnalysisComponent } from 'src/app/content/2021/210108-whatsapp-privacy-policy-analysis/whatsapp-privacy-policy-analysis.component';
import { Jan2021GatewayOsintTalkComponent } from 'src/app/content/2021/210105-gateway-osint-talk/gateway-osint-talk.component';
import { Jan2021MentalHealthComponent } from 'src/app/content/2021/210103-mental-health/mental-health.component';
import { Jan2021DesignChoicesComponent } from 'src/app/content/2021/210123-website-design-choices/website-design-choices.component';
import { Jan2021LeedsEhsTalkComponent } from 'src/app/content/2021/210120-leeds-ehs-talk/leeds-ehs-talk.component';

import { authorList } from '../data/authors';
import { Jan2021DefconWorcesterTalkComponent } from '../content/2021/210131-defcon-worcester-talk/defcon-worcester-talk.component';
import { Feb2021ConDeploymentComponent } from '../content/2021/210201-con-deployment/con-deployment.component';
import { Feb2021ConSiteComponent } from '../content/2021/210206-con-site/con-site.component';
import { Feb2021TracelabsWithHacksouthComponent } from '../content/2021/210222-tracelabs-with-hacksouth/tracelabs-with-hacksouth.component';
import { Feb2021PasswordManagementComponent } from '../content/2021/210307-password-management/password-management.component';
import { Apr2021CentralInfosecCtfAllComponent } from '../content/2021/210420-central-infosec-ctf-all/central-infosec-ctf-all.component';
import { Apr2021CentralInfosecCtfPythonComponent } from '../content/2021/210420-central-infosec-ctf-python/central-infosec-ctf-python.component';
import { Apr2021CentralInfosecCtfHackTheStaticHardComponent } from '../content/2021/210420-central-infosec-ctf-hack-the-static-hard/central-infosec-ctf-hack-the-static-hard.component';
import { Apr2021CentralInfosecCtfHackTheMazeHardComponent } from '../content/2021/210420-central-infosec-ctf-hack-the-maze-hard/central-infosec-ctf-hack-the-maze-hard.component';

export const subroutes2021: Routes = [
  {
    path: '2021_01_02+Goodbye-2020-New-Year-Party',
    component: Jan2021Goodbye2020NewYearPartyComponent,
    data: {
      title: 'Goodbye 2020: New Year Party',
      authors: [ authorList['AtomicNicos'] ],
      description: 'Saying goodbye to 2020, with friends!',
      imageUrl: '/assets/images/2020/coffeehouse/coffeehouse_backdrop.png',
      tags: [ TAG_COMMUNITY ]
    }
  },
  {
    path: '2021_01_03+Mental-Health',
    component: Jan2021MentalHealthComponent,
    data: {
      title: 'Mental Health',
      authors: [ authorList['AtomicNicos'] ],
      description: 'Discussing mental health.',
      tags: [ TAG_PERSONAL ]
    }
  },
  {
    path: '2021_01_05+OSINT-on-Gateway',
    component: Jan2021GatewayOsintTalkComponent,
    data: {
      title: 'Talking about OSINT on Gateway',
      authors: [ authorList['AtomicNicos'] ],
      description: 'I gave a small talk about OSINT on Gateway.',
      tags: [ TAG_TALKS, TAG_OSINT ]
    }
  },
  {
    path: '2021_01_08+WhatsApp-Privacy-Policy-Changes-Analysis',
    component: Jan2021WhatsappPrivacyPolicyAnalysisComponent,
    data: {
      title: 'WhatsApp Privacy Policy Changes Analysis',
      authors: [ authorList['AtomicNicos'] ],
      description: 'Dissecting the new WhatsApp privacy policy changes.',
      tags: [ TAG_INFOSEC, TAG_PRIVACY ]
    }
  },
  {
    path: '2021_01_09+WhatsApp-Privacy-Policy-Changes-Discussion-at-Hack-South',
    component: Jan2021WhatsappPrivacyPolicyHackSouthDiscussionComponent,
    data: {
      title: 'WhatsApp Privacy Policy Changes Discussion at Hack South',
      authors: [ authorList['AtomicNicos'] ],
      description: 'Dissecting the new WhatsApp privacy policy changes, live on HackSouth.',
      tags: [ TAG_INFOSEC, TAG_PRIVACY ]
    }
  },
  {
    path: '2021_01_19+eNCA-Interview-on-the-WhatsApp-Privacy-Policy-Changes',
    component: Jan2021WhatsappEncaInterviewComponent,
    data: {
      title: 'eNCA Interview on the WhatsApp Privacy Policy',
      authors: [ authorList['AtomicNicos'] ],
      description: 'I appeared on eNCA, South Africa\'s primary news network.',
      tags: [ TAG_INFOSEC, TAG_PRIVACY, TAG_MEDIA ]
    }
  },
  {
    path: '2021_01_20+Talking-at-Leeds-EHS',
    component: Jan2021LeedsEhsTalkComponent,
    data: {
      title: 'Talking at Leeds EHS',
      authors: [ authorList['AtomicNicos'] ],
      description: 'The Leeds Ethical Hacking Society hosted my take on ENISA\'s recommendations for IoT cybersecurity.',
      tags: [ TAG_TALKS, TAG_INFOSEC, TAG_IOT ]
    }
  },
  {
    path: '2021_01_23+Website-Design-Choices',
    component: Jan2021DesignChoicesComponent,
    data: {
      title: 'Website Design Choices',
      authors: [ authorList['AtomicNicos'] ],
      description: 'Going over some of my website design choices.',
      imageUrl: '/assets/images/2021/website-design-choices/design.png',
      tags: [ TAG_PERSONAL, TAG_DEVELOPMENT, TAG_WEB ]
    }
  },
  {
    path: '2021_01_31+Talking-at-DEFCON-Worcester',
    component: Jan2021DefconWorcesterTalkComponent,
    data: {
      title: 'Talking about IoT @DC441905',
      authors: [ authorList['AtomicNicos'] ],
      description: 'DEFCON Worcester was kind enough to listen to my ramblings on ENISA\'s recommendations for IoT cybersecurity.',
      tags: [ TAG_TALKS, TAG_INFOSEC, TAG_IOT ]
    }
  },
  {
    path: '2021_02_01+Organising-a-conference',
    component: Feb2021ConDeploymentComponent,
    data: {
      title: 'Introducing... Digital Overdose Con!',
      authors: [ authorList['AtomicNicos'] ],
      description: 'I\'m co-organizing a conference for rookie speakers',
      tags: [ TAG_COMMUNITY, TAG_INFOSEC, TAG_CYBERSEC ]
    }
  },
  {
    path: '2021_02_06+Building-DOs-Website',
    component: Feb2021ConSiteComponent,
    data: {
      title: 'Building DO\'s website in 6 days!',
      authors: [ authorList['AtomicNicos'] ],
      description: 'Going through the various steps of how I helped build DO\'s website.',
      tags: [ TAG_COMMUNITY, TAG_DEVELOPMENT, TAG_WEB ]
    }
  },
  {
    path: '2021_02_26+TraceLabs-CTF-With-Hacksouth',
    component: Feb2021TracelabsWithHacksouthComponent,
    data: {
      title: 'Participating in the TraceLabs OSINT CTF with HackSouth',
      authors: [ authorList['AtomicNicos'] ],
      description: 'A write-up on my participation in the TraceLabs OSINT CTF.',
      tags: [ TAG_OSINT, TAG_CTF ]
    }
  },
  {
    path: '2021_03_07+Much-Ado-About-Passwords',
    component: Feb2021PasswordManagementComponent,
    data: {
      title: 'A much ado about passwords and password management',
      authors: [ authorList['AtomicNicos'] ],
      description: 'Going over various (non-)solutions people use to store their passwords and the appeal of password management solutions.',
      tags: [ TAG_INFOSEC ]
    }
  },
  {
    path: '2021_04_20+Central-Infosec-CTF-All',
    component: Apr2021CentralInfosecCtfAllComponent,
    data: {
      title: 'Participating in the Central-Infosec CTF!',
      authors: [ authorList['AtomicNicos'] ],
      description: 'The Central Infosec CTF! I didn\'t do much of it, but here\'s my takeaways.',
      tags: [ TAG_INFOSEC, TAG_CTF ],
      imageUrl: 'https://www.centralinfosec.com/blog/img/central-infosec-shield-black.png'
    }
  },
  {
    path: '2021_04_20+Central-Infosec-CTF-Python',
    component: Apr2021CentralInfosecCtfPythonComponent,
    data: {
      title: 'Dissecting the Central-Infosec Python challenges',
      authors: [ authorList['AtomicNicos'] ],
      description: 'The Central Infosec CTF! A write-up on solving the Python challenges.',
      tags: [ TAG_INFOSEC, TAG_CTF, TAG_WRITEUP ],
      imageUrl: 'https://www.centralinfosec.com/blog/img/central-infosec-shield-black.png'
    }
  },
  {
    path: '2021_04_20+Central-Infosec-CTF-Hack-The-Static-Hard',
    component: Apr2021CentralInfosecCtfHackTheStaticHardComponent,
    data: {
      title: 'Dissecting the Central-Infosec Static Code Analysis challenge',
      authors: [ authorList['AtomicNicos'] ],
      description: 'The Central Infosec CTF! A write-up on solving the "Hack The Static: Hard" challenge.',
      tags: [ TAG_INFOSEC, TAG_CTF, TAG_WRITEUP ],
      imageUrl: 'https://www.centralinfosec.com/blog/img/central-infosec-shield-black.png'
    }
  },
  {
    path: '2021_04_20+Central-Infosec-CTF-Hack-The-Maze-Hard',
    component: Apr2021CentralInfosecCtfHackTheMazeHardComponent,
    data: {
      title: 'Dissecting the Central-Infosec Game Exploitation challenge',
      authors: [ authorList['AtomicNicos'] ],
      description: 'The Central Infosec CTF! A write-up on solving the "Hack The Maze: Hard" challenge.',
      tags: [ TAG_INFOSEC, TAG_CTF, TAG_WRITEUP ],
      imageUrl: 'https://www.centralinfosec.com/blog/img/central-infosec-shield-black.png'
    },
  }
];
