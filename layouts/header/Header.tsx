/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import { NavGroup } from '@/components/navGroup/NavGroup';
import { Button } from '@/components/burtton/Button';
import { NavMobile } from '@/components/navMobile/NavMobile';
import { headerLinks } from '@/helpers';
import styles from "./Header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  // Закрываем меню при клике на любую ссылку
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Закрываем меню при изменении пути
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "522px" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
              mass: 0.3,
              duration: 1.2
            }}
            style={{ overflow: 'hidden' }}
          >
            <NavMobile onLinkClick={handleLinkClick} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
