'use client';

import Image from 'next/image';
import { Button } from '../burtton/Button';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import styles from './Features.module.css';

export const Features = () => {
  const windowWidth = useWindowWidth();

  let src = '/features-desktop.png';
  let width = 590;
  let height = 711;

  if (windowWidth <= 800) {
    src = '/features-mobile.png';
    width = 311;
    height = 386;
  } else if (windowWidth <= 1280) {
    src = '/features-tablet.png';
    width = 720;
    height = 744;
  }
  return (
    <section className={styles.features}>
      <div className={styles.text}>
        <h2 className={styles.title}>See the Big Picture</h2>

        <p className={styles.slogan}>Area turns your data into clear, vibrant visuals that show you exactly what&apos;s happening in each region.</p>

        <ul className={styles.list}>
          <li className={styles.item}>
            <span>01</span>
            <p>Spot Trends in Seconds: No more digging through numbers.</p>
          </li>
          <li className={styles.item}>
            <span>02</span>
            <p>Get Everyone on the Same Page: Share easy-to-understand reports with your team. </p>
          </li>
          <li className={styles.item}>
            <span>03</span>
            <p>Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.</p>
          </li>
          <li className={styles.item}>
            <span>04</span>
            <p>Your Global Snapshot: Get a quick, clear overview of your entire operation.</p>
          </li>
        </ul>

        <Button>Discover More</Button>
      </div>
      <div className={styles.wrapperImage}>
        <Image src={src} width={width} height={height} alt={''} />
      </div>
    </section>
  )
}
