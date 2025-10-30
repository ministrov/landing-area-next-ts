import Link from 'next/link';
import Image from 'next/image';
import { ButtonProps } from './Button.interface';
import cn from 'classnames';
import arrow from '../../public/button-arrow.svg';
import styles from "./Button.module.css";

export const Button = ({ children, className, varient = 'default' }: ButtonProps) => {
  return (
    <Link href={'#'} className={cn(styles.button, className, {
      [styles.medium]: varient === 'medium'
    })}>
      <span>{children}</span>
      {varient !== 'default' && (<Image src={arrow} width={8} height={8} alt={''} />)}
    </Link>
  )
}
