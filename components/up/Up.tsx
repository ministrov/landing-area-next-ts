'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useScrollY } from '@/hooks/useScrollY';
import up from '../../public/up.svg';
import styles from './Up.module.css';

export const Up = () => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      animate={controls}
      initial={{ opacity: 0 }}
      className={styles.up}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <Image
        src={up}
        width={15}
        height={15}
        alt={''}
        aria-hidden="true"
      />
    </motion.button>
  )
}
