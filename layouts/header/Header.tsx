'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { NavGroup } from '@/components/navGroup/NavGroup';
import { Button } from '@/components/burtton/Button';
import { NavMobile } from '@/components/navMobile/NavMobile';
import { headerLinks } from '@/helpers';
import styles from "./Header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link href={'/'} className={styles.link}>
            Area
          </Link>

          <nav className={styles.navigation}>
            <NavGroup links={headerLinks} />
          </nav>

          <Button varient='medium' className={styles.more}>Learn More</Button>

          <button className={styles.burger}>
            <Hamburger
              toggled={isOpen}
              size={22}
              toggle={setIsOpen}
              color="#000000"
              easing="ease-in-out"
              hideOutline={false}
              label="Show menu"
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <NavMobile />
      )}
    </header>
  )
}
