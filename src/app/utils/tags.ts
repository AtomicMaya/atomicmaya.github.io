import { Tag } from 'src/app/interfaces/tag';

export const TAG_ACADEMIA: Tag = { name: 'Academia', path: 'academia' };
export const TAG_APPSEC: Tag = { name: 'Application Security', path: 'appsec' };
export const TAG_CLOUD: Tag = { name: 'Cloud', path: 'cloud' };
export const TAG_COMMUNITY: Tag = { name: 'Community', path: 'community' };
export const TAG_CONFERENCE: Tag = { name: 'Conference', path: 'conference' };
export const TAG_CRYPTOCURRENCY: Tag = { name: 'Cryptocurrency', path: 'cryptocurrency' };
export const TAG_CRYPTOGRAPHY: Tag = { name: 'Cryptography', path: 'cryptography' };
export const TAG_CTF: Tag = { name: 'CTF', path: 'ctf' };
export const TAG_CYBERSEC: Tag = { name: 'Cyber Security', path: 'cybersec' };
export const TAG_DEVELOPMENT: Tag = { name: 'Development', path: 'development' };
export const TAG_DEVOPS: Tag = { name: 'DevOps', path: 'devops' };
export const TAG_HACKING: Tag = { name: 'Hacking', path: 'hacking' };
export const TAG_INFOSEC: Tag = { name: 'Information Security', path: 'infosec' };
export const TAG_IOT: Tag = { name: 'IOT', path: 'iot' };
export const TAG_MEDIA: Tag = { name: 'Media', path: 'media' };
export const TAG_MOBILE: Tag = { name: 'Mobile', path: 'mobile' };
export const TAG_OSINT: Tag = { name: 'OSINT', path: 'osint' };
export const TAG_PERSONAL: Tag = { name: 'Personal', path: 'personal' };
export const TAG_PRIVACY: Tag = { name: 'Privacy', path: 'privacy' };
export const TAG_PROFESSIONAL: Tag = { name: 'Professional', path: 'professional' };
export const TAG_PROGRAMMING: Tag = { name: 'Programming', path: 'programming' };
export const TAG_RESPONSIBLE_DISCLOSURE: Tag = { name: 'Responsible Disclosure', path: 'responsible-disclosure' };
export const TAG_REVERSE_ENGINEERING: Tag = { name: 'Reverse Engineering', path: 'reverse-engineering' };
export const TAG_TALKS: Tag = { name: 'Talks', path: 'talks' };
export const TAG_TECHNICAL: Tag = { name: 'Technical', path: 'technical' };
export const TAG_TRAVEL: Tag = { name: 'Travel', path: 'travel' };
export const TAG_VOLUNTEERING: Tag = { name: 'Volunteering', path: 'volunteering' };
export const TAG_WEB: Tag = { name: 'Web', path: 'web' };
export const TAG_WRITEUP: Tag = { name: 'Write Up', path: 'write-up' };

import * as LibNamespace from './tags';

export function getTagNameFromPath(path: string): string {
  const match = Object.values(LibNamespace).filter((x: Tag) => x.path == path)[0]
  return (match !== undefined) ? match.name : null;
}
