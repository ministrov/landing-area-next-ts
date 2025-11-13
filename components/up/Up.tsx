import Image from 'next/image';
import styles from './Up.module.css';

export const Up = () => {
  return (
    <div className={styles.up}>
      <Image src={'/up.svg'} width={10} height={10} alt={''} />
    </div>
  )
}
