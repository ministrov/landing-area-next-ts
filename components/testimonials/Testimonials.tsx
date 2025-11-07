'use client';

import Image from 'next/image';
// import { useState, useEffect } from 'react';
import { testimonials } from '@/helpers';
import styles from './Testimonials.module.css';

export const Testimonials = () => {
  // const [current, setCurrent] = useState<number>(0);

  // useEffect(() => {
  //   const isMobile = () =>
  //     typeof window !== 'undefined' && window.innerWidth <= 800;

  //   if (!isMobile()) {
  //     const timeout = setInterval(() => {
  //       setCurrent((prev) => (prev + 1) % testimonials.length);
  //     }, 4000);

  //     return () => clearInterval(timeout);
  //   }
  //   // На мобильных автосмены нет
  //   return undefined;
  // }, []);

  // const { image, author, text, role } = testimonials[current];
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
