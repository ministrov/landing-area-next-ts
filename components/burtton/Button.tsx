import Link from 'next/link';
import { ButtonProps } from './Button.interface';
import styles from "./Button.module.css";

export const Button = ({ children, varient = 'default' }: ButtonProps) => {
  return (
    <Link href={'#'} className={styles.button}>
      <span>{children}</span>
      {varient !== 'default' && (<div>Arrow</div>)}
    </Link>
  )
}
