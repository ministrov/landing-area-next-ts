import Image from 'next/image';
import styles from './Up.module.css';

export const Up = () => {
  return (
    <div className={styles.up}>
      <Image src={'/up.svg'} width={15} height={15} alt={''} />
    </div>
  )
}
