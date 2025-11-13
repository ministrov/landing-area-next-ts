import Image from 'next/image';
import up from '../../public/up.svg';
import styles from './Up.module.css';

export const Up = () => {
  return (
    <button className={styles.up}>
      <Image src={up} width={15} height={15} alt={''} />
    </button>
  )
}
