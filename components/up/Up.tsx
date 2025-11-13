'use client';

import Image from 'next/image';
import up from '../../public/up.svg';
import styles from './Up.module.css';

export const Up = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className={styles.up} onClick={scrollToTop}>
      <Image src={up} width={15} height={15} alt={''} />
    </button>
  )
}
