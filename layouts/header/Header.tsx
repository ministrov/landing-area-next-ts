import Link from 'next/link';
import { NavGroup } from '@/components/navGroup/NavGroup';
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'} className={styles.link}>
        Area
      </Link>

      <nav className={styles.navigation}>
        <NavGroup />
      </nav>

      <button>Button</button>
    </header>
  )
}
