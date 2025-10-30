import Link from 'next/link';
import styles from "./Button.module.css";

export const Button = () => {
  return (
    <Link href={'#'} className={styles.button}>Learn More</Link>
  )
}
