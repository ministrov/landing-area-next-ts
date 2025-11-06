import { Button } from '../burtton/Button';
import styles from './Specification.module.css';

export const Specification = () => {
  return (
    <section className={styles.spec}>
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
            <li className={styles.subItem}>Ultra-fast browsing</li>
            <li className={styles.subItem}>Advanced AI insights</li>
            <li className={styles.subItem}>Seamless integration</li>
            <li className={styles.subItem}>Advanced AI insights</li>
            <li className={styles.subItem}>Ultra-fast browsing</li>
            <li className={styles.subItem}>Full UTF-8 support</li>
          </ul>
        </li>
        <li className={styles.item}>
          <div className={styles.top}>
            WebSurge
          </div>
          <ul className={styles.subList}>
            <li className={styles.subItem}>Fast browsing</li>
            <li className={styles.subItem}>Basic AI recommendations</li>
            <li className={styles.subItem}>Restricts customization</li>
            <li className={styles.subItem}>Basic AI insights</li>
            <li className={styles.subItem}>Fast browsing</li>
            <li className={styles.subItem}>Potential display errors</li>
          </ul>
        </li>
        <li className={styles.item}>
          <div className={styles.top}>
            HyperView
          </div>

          <ul className={styles.subList}>
            <li className={styles.subItem}>Moderate speeds</li>
            <li className={styles.subItem}>No AI assistance</li>
            <li className={styles.subItem}>Steep learning curve</li>
            <li className={styles.subItem}>No AI assistance</li>
            <li className={styles.subItem}>Moderate speeds</li>
            <li className={styles.subItem}>Partial UTF-8 support</li>
          </ul>
        </li>
      </ul>
    </section>
  )
}
