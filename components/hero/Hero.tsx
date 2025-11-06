'use client';

import Image from 'next/image';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import styles from './Hero.module.css';

export const Hero = () => {
  const windowWidth = useWindowWidth();

  // Пока не знаем ширину - не рендерим изображение или рендерим плейсхолдер
  if (windowWidth === null) {
    return (
      <section className={styles.hero}>
        <h2 className={styles.title}>Browse everything.</h2>
        <div className={styles.imagePlaceholder}></div>
        <div className={styles.background}></div>
      </section>
    );
  }

  let src, width, height;

  if (windowWidth > 1280) {
    src = '/hero-desktop.png';
    width = 907;
    height = 644;
  } else if (windowWidth > 800) {
    src = '/hero-tablet.png';
    width = 676;
    height = 422;
  } else {
    src = '/hero-mobile.png';
    width = 270;
    height = 541;
  }

  return (
    <section className={styles.hero}>
      <h2 className={styles.title}>Browse everything.</h2>
      <Image className={styles.image} src={src} width={width} height={height} alt={''} priority />
      <div className={styles.background}></div>
    </section>
  )
}
