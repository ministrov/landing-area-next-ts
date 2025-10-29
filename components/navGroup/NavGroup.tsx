import Link from 'next/link';
import { headerLinks } from '@/helpers';
import styles from "./NavGroup.module.css";

export const NavGroup = () => {
  return (
    <ul className={styles.list}>
      {headerLinks.map(link => (
        <li className={styles.item} key={link.id}>
          <Link href={link.href} className={styles.anchor}>{link.text}</Link>
        </li>
      ))}
    </ul>
  )
}
