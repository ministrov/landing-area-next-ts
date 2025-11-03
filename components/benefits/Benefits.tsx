import Image from 'next/image';
import styles from './Benefits.module.css';

export const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <header>
        <h2 className={styles.heading}>Benefits</h2>
        <p>We’ve cracked the code.</p>
        <p>Area provides real insights, without the data overload.</p>
      </header>

      <ul>
        <li></li>
      </ul>

      <Image src="/benefits-image-desktop.jpg" width={1200} height={620} alt="" />
    </section>
  )
}
