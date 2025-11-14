import Image from 'next/image';
import { Button } from '../burtton/Button';
import tick from '../../public/tick.svg';
import cross from '../../public/cross.svg';
import styles from './Specification.module.css';

export const Specification = () => {
  return (
    <section id='specifications' className={styles.spec}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Specs</h2>
        <p className={styles.question}>Why Choose Area?</p>
        <p className={styles.paragraph}>You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business. </p>
        <Button className={styles.btn}>Discover More</Button>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.top}>
            Area
          </div>
          <ul className={styles.subList}>
            <li className={styles.subItem}>
              <Image src={tick} width={14} height={14} alt={''} />

              <p>Ultra-fast browsing</p>
            </li>
            <li className={styles.subItem}>
              <Image src={tick} width={14} height={14} alt={''} />
              <p>Advanced AI insights</p>
            </li>
            <li className={styles.subItem}>
              <Image src={tick} width={14} height={14} alt={''} />

              <p>Seamless integration</p>
            </li>
            <li className={styles.subItem}>
              <Image src={tick} width={14} height={14} alt={''} />

              <p>Advanced AI insights</p>
            </li>
            <li className={styles.subItem}>
              <Image src={tick} width={14} height={14} alt={''} />

              <p>Ultra-fast browsing</p>
            </li>
            <li className={styles.subItem}>
              <Image src={tick} width={14} height={14} alt={''} />

              <p>Full UTF-8 support</p>
            </li>
          </ul>
        </li>
        <li className={styles.item}>
          <div className={styles.top}>
            WebSurge
          </div>
          <ul className={styles.subList}>
            <li className={styles.subItem}>
              <Image src={tick} width={14} height={14} alt={''} />

              <p>Fast browsing</p>
            </li>
            <li className={styles.subItem}>
              <Image src={tick} width={14} height={14} alt={''} />

              <p>Basic AI recommendations</p>
            </li>
            <li className={styles.subItem}>
              <Image src={tick} width={14} height={14} alt={''} />

              <p>Restricts customization</p>
            </li>
            <li className={styles.subItem}>
              <Image src={cross} width={10} height={10} alt={''} />

              <p>Basic AI insights</p>
            </li>
            <li className={styles.subItem}>
              <Image src={cross} width={12} height={12} alt={''} />

              <p>Fast browsing</p>
            </li>
            <li className={styles.subItem}>
              <Image src={cross} width={10} height={10} alt={''} />

              <p>Potential display errors</p>
            </li>
          </ul>
        </li>
        <li className={styles.item}>
          <div className={styles.top}>
            HyperView
          </div>

          <ul className={styles.subList}>
            <li className={styles.subItem}>
              <Image src={cross} width={10} height={10} alt={''} />

              <p>Moderate speeds</p>
            </li>
            <li className={styles.subItem}>
              <Image src={cross} width={10} height={10} alt={''} />

              <p>No AI assistance</p>
            </li>
            <li className={styles.subItem}>
              <Image src={cross} width={10} height={10} alt={''} />

              <p>Steep learning curve</p>
            </li>
            <li className={styles.subItem}>
              <Image src={cross} width={10} height={10} alt={''} />

              <p>No AI assistance</p>
            </li>
            <li className={styles.subItem}>
              <Image src={cross} width={10} height={10} alt={''} />
              <p>Moderate speeds</p>
            </li>
            <li className={styles.subItem}>
              <Image src={cross} width={10} height={10} alt={''} />

              <p>Partial UTF-8 support</p>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  )
}
