import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Jan2021Goodbye2020NewYearPartyComponent } from 'src/app/content/post/2021/210102-goodbye2020-new-year-party/goodbye2020-new-year-party.component';
import { Jan2021MentalHealthComponent } from 'src/app/content/post/2021/210103-mental-health/mental-health.component';
import { Jan2021GatewayOsintTalkComponent } from 'src/app/content/post/2021/210105-gateway-osint-talk/gateway-osint-talk.component';
import { Jan2021WhatsappPrivacyPolicyAnalysisComponent } from 'src/app/content/post/2021/210108-whatsapp-privacy-policy-analysis/whatsapp-privacy-policy-analysis.component';
import { Jan2021WhatsappPrivacyPolicyHackSouthDiscussionComponent } from 'src/app/content/post/2021/210109-whatsapp-privacy-policy-hack-south-discussion/whatsapp-privacy-policy-hack-south-discussion.component';
import { Jan2021LeedsEhsTalkComponent } from 'src/app/content/post/2021/210120-leeds-ehs-talk/leeds-ehs-talk.component';
import { Jan2021DesignChoicesComponent } from 'src/app/content/post/2021/210123-website-design-choices/website-design-choices.component';
import { Jan2021DefconWorcesterTalkComponent } from 'src/app/content/post/2021/210131-defcon-worcester-talk/defcon-worcester-talk.component';
import { Feb2021ConDeploymentComponent } from 'src/app/content/post/2021/210201-con-deployment/con-deployment.component';
import { Feb2021ConSiteComponent } from 'src/app/content/post/2021/210206-con-site/con-site.component';
import { Feb2021TracelabsWithHacksouthComponent } from 'src/app/content/post/2021/210222-tracelabs-with-hacksouth/tracelabs-with-hacksouth.component';
import { Feb2021PasswordManagementComponent } from 'src/app/content/post/2021/210307-password-management/password-management.component';
import { Apr2021CentralInfosecCtfAllComponent } from 'src/app/content/post/2021/210420-central-infosec-ctf-all/central-infosec-ctf-all.component';
import { Apr2021CentralInfosecCtfHackTheMazeHardComponent } from 'src/app/content/post/2021/210420-central-infosec-ctf-hack-the-maze-hard/central-infosec-ctf-hack-the-maze-hard.component';
import { Apr2021CentralInfosecCtfHackTheStaticHardComponent } from 'src/app/content/post/2021/210420-central-infosec-ctf-hack-the-static-hard/central-infosec-ctf-hack-the-static-hard.component';
import { Apr2021CentralInfosecCtfPythonComponent } from 'src/app/content/post/2021/210420-central-infosec-ctf-python/central-infosec-ctf-python.component';
import { Apr2021DigitalOverdoseConferenceComponent } from 'src/app/content/post/2021/210429-digital-overdose-conference/digital-overdose-conference.component';
import { Jul2021TheHalfwayMarkComponent } from 'src/app/content/post/2021/210720-the-2021-halfway-mark/the-halfway-mark.component';
import { Aug2021EnumeratingTheLightshotCdnComponent } from 'src/app/content/post/2021/210831-enumerating-the-lightshot-cdn/enumerating-the-lightshot-cdn.component';
import { Oct2021DigitalOverdoseWriteupOutageComponent } from 'src/app/content/post/2021/211011-digital-overdose-official-writeup-1-outage/digital-overdose-official-writeup-1-outage.component';
import { Oct2021DigitalOverdoseWriteupCakeComponent } from 'src/app/content/post/2021/211011-digital-overdose-official-writeup-2-a-lying-cake/digital-overdose-official-writeup-2-a-lying-cake.component';
import { Oct2021DigitalOverdoseWriteupC4Component } from 'src/app/content/post/2021/211011-digital-overdose-official-writeup-3-c4/digital-overdose-official-writeup-3-c4.component';
import { Nov2021HappyBirthday } from 'src/app/content/post/2021/211115-happy-birthday/happybirthday.component';
import { Nov2021conINTComponent } from 'src/app/content/post/2021/211125-conint-2021/conint2021.component';
import { authorList } from 'src/app/data/authors';
import { TAG_COMMUNITY, TAG_CONFERENCE, TAG_CRYPTOGRAPHY, TAG_CTF, TAG_CYBERSEC, TAG_DEVELOPMENT, TAG_INFOSEC, TAG_IOT, TAG_OSINT, TAG_PERSONAL, TAG_PRIVACY, TAG_TALKS, TAG_VOLUNTEERING, TAG_WEB, TAG_WRITEUP } from 'src/app/utils/tags';

export const subroutes2021: Routes = [
  {
    path: '2021_01_02+goodbye-2020-new-year-party',
    component: Jan2021Goodbye2020NewYearPartyComponent,
    data: {
      title: 'Goodbye 2020: New Year Party',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Saying goodbye to 2020, with friends!',
      tags: [ TAG_COMMUNITY ],
      date: [2021, 1, 2],
      readingTime: 1
    }
  },
  {
    path: '2021_01_03+mental-health',
    component: Jan2021MentalHealthComponent,
    data: {
      title: 'Mental Health',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Discussing mental health.',
      tags: [ TAG_PERSONAL ],
      date: [2021, 1, 3],
      readingTime: 1
    }
  },
  {
    path: '2021_01_05+osint-on-gateway',
    component: Jan2021GatewayOsintTalkComponent,
    data: {
      title: 'Talking about OSINT on Gateway',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I gave a small talk about OSINT on Gateway.',
      tags: [ TAG_TALKS, TAG_OSINT ],
      date: [2021, 1, 5],
      readingTime: 1
    }
  },
  {
    path: '2021_01_08+whatsapp-privacy-policy-changes-analysis',
    component: Jan2021WhatsappPrivacyPolicyAnalysisComponent,
    data: {
      title: 'WhatsApp Privacy Policy Changes Analysis',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Dissecting the new WhatsApp privacy policy changes.',
      tags: [ TAG_INFOSEC, TAG_PRIVACY ],
      date: [2021, 1, 8],
      readingTime: 16
    }
  },
  {
    path: '2021_01_09+whatsapp-privacy-policy-changes-discussion-at-hack-south',
    component: Jan2021WhatsappPrivacyPolicyHackSouthDiscussionComponent,
    data: {
      title: 'WhatsApp Privacy Policy Changes Discussion at Hack South',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Dissecting the new WhatsApp privacy policy changes, live on HackSouth.',
      tags: [ TAG_INFOSEC, TAG_PRIVACY ],
      date: [2021, 1, 9],
      readingTime: 1
    }
  },
  {
    path: '2021_01_20+talking-at-leeds-ehs',
    component: Jan2021LeedsEhsTalkComponent,
    data: {
      title: 'Talking at Leeds EHS',
      authors: [ authorList['AtomicMaya'] ],
      description: 'The Leeds Ethical Hacking Society hosted my take on ENISA\'s recommendations for IoT cybersecurity.',
      tags: [ TAG_TALKS, TAG_INFOSEC, TAG_IOT ],
      date: [2021, 1, 20],
      readingTime: 1
    }
  },
  {
    path: '2021_01_23+website-design-choices',
    component: Jan2021DesignChoicesComponent,
    data: {
      title: 'Website Design Choices',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Going over some of my website design choices.',
      tags: [ TAG_PERSONAL, TAG_DEVELOPMENT, TAG_WEB ],
      date: [2021, 1, 23],
      readingTime: 2
    }
  },
  {
    path: '2021_01_31+talking-at-defcon-worcester',
    component: Jan2021DefconWorcesterTalkComponent,
    data: {
      title: 'Talking about IoT @DC441905',
      authors: [ authorList['AtomicMaya'] ],
      description: 'DEFCON Worcester was kind enough to listen to my ramblings on ENISA\'s recommendations for IoT cybersecurity.',
      tags: [ TAG_TALKS, TAG_INFOSEC, TAG_IOT ],
      date: [2021, 1, 31],
      readingTime: 1
    }
  },
  {
    path: '2021_02_01+organising-a-conference',
    component: Feb2021ConDeploymentComponent,
    data: {
      title: 'Introducing... Digital Overdose Con!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I\'m co-organizing a conference for rookie speakers',
      tags: [ TAG_COMMUNITY, TAG_INFOSEC, TAG_CYBERSEC ],
      date: [2021, 2, 1],
      readingTime: 1
    }
  },
  {
    path: '2021_02_06+building-dos-website',
    component: Feb2021ConSiteComponent,
    data: {
      title: 'Building DO\'s website in 6 days!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Going through the various steps of how I helped build DO\'s website.',
      tags: [ TAG_COMMUNITY, TAG_DEVELOPMENT, TAG_WEB ],
      date: [2021, 2, 6],
      readingTime: 4
    }
  },
  {
    path: '2021_02_26+tracelabs-ctf-with-hacksouth',
    component: Feb2021TracelabsWithHacksouthComponent,
    data: {
      title: 'Participating in the TraceLabs OSINT CTF with HackSouth',
      authors: [ authorList['AtomicMaya'] ],
      description: 'A write-up on my participation in the TraceLabs OSINT CTF.',
      tags: [ TAG_OSINT, TAG_CTF ],
      date: [2021, 2, 26],
      readingTime: 12
    }
  },
  {
    path: '2021_03_07+much-ado-about-passwords',
    component: Feb2021PasswordManagementComponent,
    data: {
      title: 'A much ado about passwords and password management',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Going over various (non-)solutions people use to store their passwords and the appeal of password management solutions.',
      tags: [ TAG_INFOSEC ],
      date: [2021, 3, 7],
      readingTime: 5
    }
  },
  {
    path: '2021_04_20+central-infosec-ctf-all',
    component: Apr2021CentralInfosecCtfAllComponent,
    data: {
      title: 'Participating in the Central-Infosec CTF!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'The Central Infosec CTF! I didn\'t do much of it, but here\'s my takeaways.',
      tags: [ TAG_INFOSEC, TAG_CTF ],
      imageUrl: 'https://www.centralinfosec.com/blog/img/central-infosec-shield-black.png',
      date: [2021, 4, 20],
      readingTime: 3
    }
  },
  {
    path: '2021_04_20+central-infosec-ctf-python',
    component: Apr2021CentralInfosecCtfPythonComponent,
    data: {
      title: 'Dissecting the Central-Infosec Python challenges',
      authors: [ authorList['AtomicMaya'] ],
      description: 'The Central Infosec CTF! A write-up on solving the Python challenges.',
      tags: [ TAG_INFOSEC, TAG_CTF, TAG_WRITEUP ],
      imageUrl: 'https://www.centralinfosec.com/blog/img/central-infosec-shield-black.png',
      date: [2021, 4, 20],
      readingTime: 15
    }
  },
  {
    path: '2021_04_20+central-infosec-ctf-hack-the-static-hard',
    component: Apr2021CentralInfosecCtfHackTheStaticHardComponent,
    data: {
      title: 'Dissecting the Central-Infosec Static Code Analysis challenge',
      authors: [ authorList['AtomicMaya'] ],
      description: 'The Central Infosec CTF! A write-up on solving the "Hack The Static: Hard" challenge.',
      tags: [ TAG_INFOSEC, TAG_CTF, TAG_WRITEUP ],
      imageUrl: 'https://www.centralinfosec.com/blog/img/central-infosec-shield-black.png',
      date: [2021, 4, 20],
      readingTime: 13
    }
  },
  {
    path: '2021_04_20+central-infosec-ctf-hack-the-maze-hard',
    component: Apr2021CentralInfosecCtfHackTheMazeHardComponent,
    data: {
      title: 'Dissecting the Central-Infosec Game Exploitation challenge',
      authors: [ authorList['AtomicMaya'] ],
      description: 'The Central Infosec CTF! A write-up on solving the "Hack The Maze: Hard" challenge.',
      tags: [ TAG_INFOSEC, TAG_CTF, TAG_WRITEUP ],
      imageUrl: 'https://www.centralinfosec.com/blog/img/central-infosec-shield-black.png',
      date: [2021, 4, 20],
      readingTime: 15
    },
  },
  {
    path: '2021_04_29+digital-overdose-conference',
    component: Apr2021DigitalOverdoseConferenceComponent,
    data: {
      title: 'The 2021 Digital Overdose Conference: Tales and Takeaways',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Speaking a bit more about my experiences surrounding and during the Digital Overdose Conference.',
      tags: [ TAG_INFOSEC, TAG_COMMUNITY, TAG_CONFERENCE, TAG_VOLUNTEERING ],
      date: [2021, 4, 29],
      readingTime: 10
    },
  },
  {
    path: '2021_07_20+the-2021-halfway-mark',
    component: Jul2021TheHalfwayMarkComponent,
    data: {
      title: 'Halfway through 2021: A brief recap of what I\'ve been up to',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Going over the timeline for the last few months, seeing what has been accomplished.',
      tags: [ TAG_PERSONAL ],
      date: [2021, 7, 20],
      readingTime: 9
    },
  },
  {
    path: '2021_08_31+enumerating-the-lightshot-cdn',
    component: Aug2021EnumeratingTheLightshotCdnComponent,
    data: {
      title: 'Enumerating the Lightshot CDN',
      authors: [ authorList['AtomicMaya'] ],
      description: 'How I went from the premise of an open CDN to exploiting it as a proof of concept',
      tags: [ TAG_INFOSEC, TAG_DEVELOPMENT, TAG_PRIVACY ],
      date: [2021, 8, 31],
      readingTime: 6
    }
  },
  {
    path: '2021_10_11+digital-overdose-official-writeup-1-outage',
    component: Oct2021DigitalOverdoseWriteupOutageComponent,
    data: {
      title: 'Digital Overdose CTF Official Writeup #1 - Outage',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Official challenge developer writeup for "Outage - The usual suspect", a challenge presented at the Digital Overdose 2021 Autumn CTF.',
      tags: [ TAG_CTF, TAG_WRITEUP ],
      date: [2021, 10, 11],
      imageUrl: 'assets/images/post/2021/211011-ctf/ctf_cover_2.png',
      readingTime: 4
    }
  },
  {
    path: '2021_10_11+digital-overdose-official-writeup-2-a-lying-cake',
    component: Oct2021DigitalOverdoseWriteupCakeComponent,
    data: {
      title: 'Digital Overdose CTF Official Writeup #2 - A door by any other name',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Official challenge developer writeup for "A door by any other name", a challenge presented at the Digital Overdose 2021 Autumn CTF.',
      tags: [ TAG_CTF, TAG_WRITEUP, TAG_CRYPTOGRAPHY ],
      date: [2021, 10, 11],
      imageUrl: 'assets/images/post/2021/211011-ctf/ctf_cover_2.png',
      readingTime: 4
    }
  },
  {
    path: '2021_10_11+digital-overdose-official-writeup-3-c4',
    component: Oct2021DigitalOverdoseWriteupC4Component,
    data: {
      title: 'Digital Overdose CTF Official Writeup #3 - C1 - I think this should be C4',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Official challenge developer writeup for "C1 - I think this should be C4", a challenge presented at the Digital Overdose 2021 Autumn CTF.',
      tags: [ TAG_CTF, TAG_WRITEUP, TAG_DEVELOPMENT, TAG_WEB ],
      date: [2021, 10, 11],
      imageUrl: 'assets/images/post/2021/211011-ctf/ctf_cover_2.png',
      readingTime: 15
    }
  },/*
  {
    path: '2021_10_30+beercon3',
    component: Oct2021Beercon3Component,
    data: {
      title: 'Speaking at BeerCon 3!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I spoke at BeerCon 3, mainly about how JavaScript and Application Security don\'t really mesh well together.',
      tags: [ TAG_CONFERENCE, TAG_INFOSEC, TAG_APPSEC, TAG_PROGRAMMING, TAG_TALKS, TAG_VOLUNTEERING ],
      date: [2021, 10, 30],
      readingTime: 2
    }
  },*/
  {
    path: '2021_11_15+happy-birthday-to-this-blog',
    component: Nov2021HappyBirthday,
    data: {
      title: 'Happy birthday to this blog!',
      authors: [ authorList['AtomicMaya'] ],
      description: 'Marking the first year of this blog\'s existence.',
      tags: [ TAG_PERSONAL ],
      date: [2021, 11, 15],
      readingTime: 1
    }
  },
  {
    path: '2021_11_25+speaking-at-conint',
    component: Nov2021conINTComponent,
    data: {
      title: 'Speaking about communities at conINT',
      authors: [ authorList['AtomicMaya'] ],
      description: 'I took a stab at taking one year of experience in managing a community of hackers, and trying to discuss the benefits of Intelligence when it comes to keeping its members safe.',
      tags: [ TAG_CONFERENCE, TAG_COMMUNITY, TAG_OSINT ],
      date: [2021, 11, 25],
      readingTime: 1
    }
  },
];
subroutes2021.map((r) => r.data.path = r.path)

@NgModule({
  imports: [RouterModule.forChild(subroutes2021)],
  exports: [RouterModule]
})
export class Posts2021RoutingModule { }
