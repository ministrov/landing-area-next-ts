'use client';

import Image from 'next/image';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export const Hero = () => {
  const windowWidth = useWindowWidth();

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 100, // начинается ниже своей позиции
    },
    visible: {
      opacity: 1,
      y: 0, // поднимается на свою позицию
      transition: {
        duration: 0.6,
        delay: 0.6
      }
    }
  };

  // const imageVariants = {
  //   hidden: {
  //     opacity: 0,
  //     x: -100, // выезд слева
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 0.6,
  //       delay: 0.6
  //     }
  //   }
  // };

  const backgroundVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3
      }
    }
  };

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
    width = 947;
    height = 674;
  } else if (windowWidth > 800) {
    src = '/hero-tablet.png';
    width = 706;
    height = 452;
  } else {
    src = '/hero-mobile.png';
    width = 290;
    height = 541;
  }

  return (
    <section className={styles.hero}>
      <h2 className={styles.title}>Browse everything.</h2>

      <motion.div
        key="image-container"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className={styles.imageContainer}
      >

        <Image
          className={styles.image}
          src={src}
          width={width}
          height={height}
          alt={''}
          priority
        />

      </motion.div>

      <motion.div
        key="background"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className={styles.background}
      />
    </section>
  )
}
