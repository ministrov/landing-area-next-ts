import Image from 'next/image';

import { partners } from '@/helpers';
import styles from './Partners.module.css';

export const Partners = () => {
  return (
    <section className={styles.partners}>
      <h2 className='visually-hidden'>Partner logo images section</h2>
      <p className={styles.slogan}>Trusted by:</p>

      <ul className={styles.partnersList}>
        {partners.map(partner => (
          <li className={styles.partnerItem} key={partner.id}>
            <Image src={partner.path} width={114} height={44} alt='' />
          </li>
        ))}
      </ul>
    </section>
  )
}
