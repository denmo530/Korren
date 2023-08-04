import React from 'react';
import Image from 'next/image';
import styles from '@/styles/HeroBanner.module.css';

const HeroBanner: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <Image src="/images/header.png" alt="hero image example" fill quality={100} />
      </div>

      <div className={styles.heroText}>
        <h1>Welcome to Korren</h1>
        <p>
          Discover the <span className={styles.colorOne}>Best Places</span> to Live as a{' '}
          <span className={styles.colorTwo}> Student</span>
        </p>
        {/* <p>Discover the Best Places to Live as a Student</p> */}
        {/* Discover the Best Places to Live as a Student, The rating site student housing  */}
      </div>
    </div>
  );
};

export default HeroBanner;
