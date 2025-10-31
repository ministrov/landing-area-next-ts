import partner1 from '../public/partners-logo-1.png';
import partner2 from '../public/partners-logo-2.png';
import partner3 from '../public/partners-logo-3.png';
import partner4 from '../public/partners-logo-4.png';
import partner5 from '../public/partners-logo-5.png';
import partner6 from '../public/partners-logo-6.png';

export interface Links {
  id: number;
  text: string;
  href: string;
}

export interface Partner {
  id: number;
  path: string;
}

export const headerLinks: Links[] = [
  { id: 1, text: 'Benefits', href: '#benefits' },
  { id: 2, text: 'Specifications', href: '#specifications' },
  { id: 3, text: 'How-to', href: '#howTo' },
  { id: 4, text: 'Contact Us', href: '#contactUs' },
];

export const footerLinks: Links[] = [
  { id: 1, text: 'Benefits', href: '#benefits' },
  { id: 2, text: 'Specifications', href: '#specifications' },
  { id: 3, text: 'How-to', href: '#howTo' },
];

export const partners = [
  { id: 1, path: partner1 },
  { id: 2, path: partner2 },
  { id: 3, path: partner3 },
  { id: 4, path: partner4 },
  { id: 5, path: partner5 },
  { id: 6, path: partner6 },
];
