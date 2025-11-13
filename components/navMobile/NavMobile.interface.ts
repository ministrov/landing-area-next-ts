import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export interface NavMobileProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  onLinkClick: () => void;
}
