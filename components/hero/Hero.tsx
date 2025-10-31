import Image from 'next/image';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <h2 className={styles.title}>Browse everything.</h2>

      <Image className={styles.image} src={'/hero-desktop.png'} width={907} height={644} alt={''} />
      <div className={styles.background}></div>
    </section>
  )
}
