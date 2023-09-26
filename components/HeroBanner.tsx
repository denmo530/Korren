import React from 'react';
import Image from 'next/image';
import styles from '@/styles/HeroBanner.module.css';

const HeroBanner: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <Image src="/images/header.webp" alt="hero image example" fill />
      </div>

      <div className={styles.heroText}>
        <h1 className="font-bold">Welcome to Korren</h1>
        <p>
          Discover the <span className={styles.colorOne}>Best Places</span> to Live as a{' '}
          <span className={styles.colorTwo}> Student</span>
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
