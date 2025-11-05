import { Button } from '../burtton/Button';
import styles from './ConnectUs.module.css';

export const ConnectUs = () => {
  return (
    <section className={styles.connect}>
      <div className={styles.wrapper}>
        <h2>Connect with us</h2>
        <p>Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.</p>
        <Button varient='medium'>Learn More</Button>
      </div>
    </section>
  )
}
