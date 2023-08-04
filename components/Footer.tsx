import React from 'react';
import styles from '@/styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>Korren</h2>
      <div className={styles.row}>
        <div className={styles.section}>
          <h4>Blog</h4>
        </div>
        <div className={styles.section}>
          <h4>About us</h4>
        </div>
        <div className={styles.section}>
          <h4>Contact</h4>
        </div>
        <div className={styles.section}>
          <h4>All dorms</h4>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.sectionTwo}>
          <h6>Terms & Conditions</h6>
          <h6>Privacy Policy</h6>
          <h6>All Rigths Reserved</h6>
        </div>
      </div>
      <div className={styles.row}>
        <p>
          Developed by <span>Dennis Moradkhani</span> & <span>Tim Olsson</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
