import Link from 'next/link';
import { NavGroup } from '@/components/navGroup/NavGroup';
import { Button } from '@/components/burtton/Button';
import { headerLinks } from '@/helpers';
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'} className={styles.link}>
        Area
      </Link>

      <nav className={styles.navigation}>
        <NavGroup links={headerLinks} />
      </nav>

      <Button varient='medium'>Learn More</Button>
    </header>
  )
}
