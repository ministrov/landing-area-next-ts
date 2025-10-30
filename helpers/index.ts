export interface Links {
  id: number;
  text: string;
  href: string;
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
