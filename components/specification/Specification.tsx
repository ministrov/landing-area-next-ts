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
          Area
          <ul>
            <li>Ultra-fast browsing</li>
            <li>Advanced AI insights</li>
            <li>Seamless integration</li>
            <li>Advanced AI insights</li>
            <li>Ultra-fast browsing</li>
            <li>Full UTF-8 support</li>
          </ul>
        </li>
        <li className={styles.item}>
          WebSurge
          <ul>
            <li>Fast browsing</li>
            <li>Basic AI recommendations</li>
            <li>Restricts customization</li>
            <li>Basic AI insights</li>
            <li>Fast browsing</li>
            <li>Potential display errors</li>
          </ul>
        </li>
        <li className={styles.item}>
          HyperView

          <ul>
            <li>Moderate speeds</li>
            <li>No AI assistance</li>
            <li>Steep learning curve</li>
            <li>No AI assistance</li>
            <li>Moderate speeds</li>
            <li>Partial UTF-8 support</li>
          </ul>
        </li>
      </ul>
    </section>
  )
}
