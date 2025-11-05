import Image from 'next/image';
import { Button } from '../burtton/Button';
import styles from './HowItWorks.module.css';

export const HowItWorks = () => {
  return (
    <section className={styles.how}>
      <header className={styles.header}>
        <h2 className={styles.title}>Map Your Success</h2>

        <Button>Discover More</Button>
      </header>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span>01</span>
          <h3>Get Started</h3>
          <p>With our intuitive setup, you’re up and running in minutes.</p>
        </li>
        <li className={styles.item}>
          <span>02</span>
          <h3>Customize and Configure</h3>
          <p>Adapt Area to your specific requirements and preferences.</p>
        </li>
        <li className={styles.item}>
          <span>03</span>
          <h3>Grow Your Business</h3>
          <p>Make informed decisions to exceed your goals.</p>
        </li>
      </ul>

      <Image className={styles.image} src={'/how-desktop.png'} width={1200} height={665} alt={''} />
    </section>
  )
}
