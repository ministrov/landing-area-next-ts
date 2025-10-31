import Link from 'next/link';
import { headerLinks } from '@/helpers';
import { Button } from '../burtton/Button';
import styles from "./NavMobile.module.css";

export const NavMobile = () => {
  return (
    <div className={styles.menuWrapper}>
      <ul className={styles.menuList}>
        {headerLinks.map(link => (
          <li className={styles.item} key={link.id}>
            <Link href={link.href} className={styles.anchor}>{link.text}</Link>
          </li>
        ))}
      </ul>

      <Button varient='medium' className={styles.mobileMore}>Learn More</Button>
    </div>
  )
}
