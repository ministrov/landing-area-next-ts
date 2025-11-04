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
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
      </ul>
    </section>
  )
}
