import { TitleService } from './title.service';
import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { BASE_URL } from '../data/url';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(private meta: Meta, private title: TitleService) { }

  setTags(url: string,
          title: string,
          imgUrl?: string,
          imgWidth?: number, imgHeight?: number,
          keywords?: string[], description?: string,
          authorName?: string, authorSocial?: string) {
    this.title.setTitle(title);

    [
      { name: 'og:url', content: `${BASE_URL}${url}` },
      { name: 'og:site_name', content: BASE_URL },
      { name: 'og:title', content: `${title} | AtomicNicos\'s Blog` },
      { name: 'og:description', content: `${description ?? title + ': A post on \'AtomicNicos\'s Blog at the end of the universe, talking all things infosec, IoT, development and personal.'}` },
      { name: 'og:image', content: (imgUrl !== undefined) ? `${BASE_URL}${imgUrl}` : `${BASE_URL}/assets/images/cover.jpg` },
      { name: 'description', content: `${description ?? title + ': A post on \'AtomicNicos\'s Blog at the end of the universe, talking all things infosec, IoT, development and personal.'}` },
      { name: 'keywords', content: ['atomicnicos', 'osint', 'infosec', 'security', 'cybersec', 'cybersecurity', ...keywords].join(', ') },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:url', content: `${BASE_URL}${url}` },
      { name: 'twitter:image', content: (imgUrl !== undefined) ? `${BASE_URL}${imgUrl}` : `${BASE_URL}/assets/images/cover.jpg` },
      { name: 'twitter:label1', content: 'Written By' },
      { name: 'twitter:data1', content: `${authorName ?? 'Nicolas Boeckh'}` },
      { name: 'twitter:site', content: '@AtomicNicos' },
      { name: 'twitter:creator', content: `${authorSocial ?? '@AtomicNicos' }` },
      { name: 'twitter:image:width', content: `${imgWidth ?? '750'}` },
      { name: 'twitter:image:height', content: `${imgHeight ?? '750'}`}
    ].forEach(x => this.meta.updateTag(x));
  }
}
