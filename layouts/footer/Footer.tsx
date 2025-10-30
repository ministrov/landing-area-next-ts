import Image from 'next/image';
import { NavGroup } from '@/components/navGroup/NavGroup';
import { footerLinks } from '@/helpers';
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <NavGroup links={footerLinks} />
          </div>
          <div className={styles.bottom}>
            <Image src={'/footer-logo.svg'} width={32} height={70} alt={''} />

            <div className={styles.copyright}>
              <span>© Area.</span>
              <span>2025</span>
            </div>

            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
