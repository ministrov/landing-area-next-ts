import Image from 'next/image';
import { Button } from '../burtton/Button';
import styles from './Features.module.css';

export const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.text}>
        <h2 className={styles.title}>See the Big Picture</h2>

        <p className={styles.slogan}>Area turns your data into clear, vibrant visuals that show you exactly what&apos;s happening in each region.</p>

        <ul className={styles.list}>
          <li className={styles.item}></li>
          <li className={styles.item}></li>
          <li className={styles.item}></li>
          <li className={styles.item}></li>
        </ul>

        <Button>Discover More</Button>
      </div>
      <div className={styles.wrapperImage}>
        <Image src={''} alt={''} />
      </div>
    </section>
  )
}
