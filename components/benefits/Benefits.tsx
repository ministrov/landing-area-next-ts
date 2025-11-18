'use client';

// import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import styles from './Benefits.module.css';

export const Benefits = () => {
  const windowWidth = useWindowWidth();
  // const listRef = useRef(null);

  // useEffect(() => {
  //   console.log(listRef);
  //   console.log(listRef.current);
  //   console.log(windowWidth);
  // }, [windowWidth]);

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
    src = '/benefits-image-desktop.jpg';
    width = 1200;
    height = 620;
  } else if (windowWidth > 800) {
    src = '/benefits-image-tablet.jpg';
    width = 700;
    height = 600;
  } else {
    src = '/benefits-image-mobile.jpg';
    width = 343;
    height = 600;
  }
  return (
    <div className={styles.benefits}>
      <header className={styles.header}>
        <h2 className={styles.heading}>Benefits</h2>
        <p className={styles.slogan}>We’ve cracked the code.</p>
        <p className={styles.insights}>Area provides real insights, without the data overload.</p>
      </header>

      <ul className={styles.list}>
        <li className={styles.item}>
          <Image src={'/benefits-insights.svg'} width={24} height={24} alt={''} />
          <h3>Amplify Insights</h3>
          <p>Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.</p>
        </li>
        <li className={styles.item}>
          <Image src={'/benefits-earth.svg'} width={24} height={24} alt={''} />
          <h3>Control Your Global Presence</h3>
          <p>Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.</p>
        </li>
        <li className={styles.item}>
          <Image src={'/benefits-account.svg'} width={24} height={24} alt={''} />
          <h3>Remove Language Barriers</h3>
          <p>Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.</p>
        </li>
        <li className={styles.item}>
          <Image src={'/benefits-chart.svg'} width={24} height={24} alt={''} />
          <h3>Visualize Growth</h3>
          <p>Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.</p>
        </li>
      </ul>

      <Image className={styles.image} src={src} width={width} height={height} alt="" />
    </div>
  )
}
