import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Section.module.css';
import testimg from '@/public/buildings2.svg';
import testimg2 from '@/public/review2.svg';

const Section = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.text}>
          <h1 className={styles.item}>
            Discover your new <span>home</span>
          </h1>
          <p className={styles.itemText}>
            Are you a college student searching for the perfect dormitory to call your home away
            from home? Look no further than our comprehensive dorm review website!
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image src={testimg2} alt="Test Image 2" width={350} height={200} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={testimg} alt="Test Image 3" width={350} height={200} />
        </div>
        <div className={styles.text}>
          <h1 className={styles.item}>Write a review</h1>
          <p className={styles.itemText}>
            Got some dorm life wisdom to share? Write a review and help future college students make
            informed decisions about their home away from home!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
