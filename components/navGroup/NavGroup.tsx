import Link from 'next/link';
import { NavGroupProps } from './NavGroup.interface';
import cn from 'classnames';
import styles from "./NavGroup.module.css";

export const NavGroup = ({ links, className }: NavGroupProps) => {
  return (
    <ul className={cn(styles.list, className)}>
      {links.map(link => (
        <li className={styles.item} key={link.id}>
          <Link href={link.href} className={styles.anchor}>{link.text}</Link>
        </li>
      ))}
    </ul>
  )
}
