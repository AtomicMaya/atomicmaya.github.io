import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { BASE_URL } from 'src/app/data/url';
import { TitleService } from 'src/app/services/title.service';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(private meta: Meta, private title: TitleService) { }

  setTags(url: string,
          title: string,
          imgUrl?: string,
          imgWidth?: number, imgHeight?: number,
          keywords?: string[], description?: string, estimatedReadingTime?: number,
          authorName?: string, authorSocial?: string,) {
    this.title.setTitle(title);

    [
      { name: 'og:url', content: `${BASE_URL}${url}` },
      { name: 'og:site_name', content: BASE_URL },
      { name: 'og:title', content: `${title} | AtomicMaya's Blog` },
      { name: 'og:description', content: `${estimatedReadingTime != undefined ? 'Est. reading time: ' + estimatedReadingTime + ' minutes | ' : ''} ${description ?? title + ': A post on \'AtomicMaya\'s Blog at the end of the universe, talking all things infosec, IoT, development and personal.'}` },
      { name: 'og:image', content: (imgUrl !== undefined) ? `${BASE_URL}${imgUrl}` : `${BASE_URL}/assets/images/cover.jpg` },
      { name: 'description', content: `${estimatedReadingTime != undefined ? 'Est. reading time: ' + estimatedReadingTime + ' minutes | ' : ''} ${description ?? title + ': A post on \'AtomicMaya\'s Blog at the end of the universe, talking all things infosec, IoT, development and personal.'}` },
      { name: 'keywords', content: ['atomicnicos', 'atomicmaya', 'osint', 'infosec', 'security', 'cybersec', 'cybersecurity', ...keywords].join(', ') },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:url', content: `${BASE_URL}${url}` },
      { name: 'twitter:image', content: (imgUrl !== undefined) ? `${BASE_URL}${imgUrl}` : `${BASE_URL}/assets/images/cover.jpg` },
      { name: 'twitter:label1', content: 'Written By' },
      { name: 'twitter:data1', content: `${authorName ?? 'Maya Boeckh'}` },
      { name: 'twitter:site', content: '@AtomicMaya' },
      { name: 'twitter:creator', content: `${authorSocial ?? '@AtomicMaya' }` },
      { name: 'twitter:image:width', content: `${imgWidth ?? '750'}` },
      { name: 'twitter:image:height', content: `${imgHeight ?? '750'}`},
    ].forEach(x => this.meta.updateTag(x));
  }
}
