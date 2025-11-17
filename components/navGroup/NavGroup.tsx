'use client';

import Link from 'next/link';
import { NavGroupProps } from './NavGroup.interface';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import cn from 'classnames';
import styles from "./NavGroup.module.css";

export const NavGroup = ({ links, className }: NavGroupProps) => {
  const { scrollToSection } = useSmoothScroll();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    console.log(href);
    if (href.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.substring(1); // Убираем # из начала
      console.log(sectionId);
      scrollToSection(sectionId);
    }
  };

  return (
    <ul className={cn(styles.list, className)}>
      {links.map(link => (
        <li className={styles.item} key={link.id}>
          <Link
            href={link.href}
            className={styles.anchor}
            onClick={(e) => handleClick(e, link.href)}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}
