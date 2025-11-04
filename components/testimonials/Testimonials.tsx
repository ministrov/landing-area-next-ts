import Image from 'next/image';
import { testimonials } from '@/helpers';
import styles from './Testimonials.module.css';

export const Testimonials = () => {
  const { image, author, text, role } = testimonials[0];

  return (
    <section className={styles.testimonials}>
      <div className={styles.carousel}>
        <div className={styles.slide}>
          <Image className={styles.image} src={image} width={590} height={670} alt={author} />
          <div className={styles.textContent}>
            <p className={styles.text}>{text}</p>
            <p className={styles.author}>{author}</p>
            <p className={styles.role}>{role}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
