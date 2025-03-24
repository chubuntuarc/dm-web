import React from 'react';
import styles from './footer.module.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src="/logo_white.png" alt="MF2 Logo" className={styles.logo} />
        <div className={styles.socialLinks}>
          <a 
            href="https://www.facebook.com/DraMileidyFernandez" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialLink}
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://www.instagram.com/dra.mileidy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialLink}
          >
            <FaInstagram />
          </a>
          <a 
            href="https://api.whatsapp.com/send?phone=5216642866427" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialLink}
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 