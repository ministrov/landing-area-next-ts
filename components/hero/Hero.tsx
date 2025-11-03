'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

export const Hero = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // установить начальное значение

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let src = '/hero-desktop.png';
  let width = 907;
  let height = 644;

  if (windowWidth <= 800) {
    src = '/hero-mobile.png';
    width = 270;
    height = 541;
  } else if (windowWidth <= 1280) {
    src = '/hero-tablet.png';
    width = 676;
    height = 422;
  }

  return (
    <section className={styles.hero}>
      <h2 className={styles.title}>Browse everything.</h2>
      <Image className={styles.image} src={src} width={width} height={height} alt={''} />
      <div className={styles.background}></div>
    </section>
  )
}
