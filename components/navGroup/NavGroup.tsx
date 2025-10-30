import Link from 'next/link';
import { NavGroupProps } from './NavGroup.interface';
import styles from "./NavGroup.module.css";

export const NavGroup = ({ links }: NavGroupProps) => {
  return (
    <ul className={styles.list}>
      {links.map(link => (
        <li className={styles.item} key={link.id}>
          <Link href={link.href} className={styles.anchor}>{link.text}</Link>
        </li>
      ))}
    </ul>
  )
}
