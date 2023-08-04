import Image from 'next/image';
import React from 'react';
import styles from '@/styles/AnimatedCard.module.css';

interface AnimatedCardProps {
  src: string;
  alt: string;
  title: string;
  message: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ src, alt, title, message }) => {
  return (
    <div className={styles.card}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'cover' }}
      />
      <div className={styles.intro}>
        <h1>{title}</h1>
        <div className={styles.p}>{`${message.slice(0, 99)}...`}</div>
      </div>
    </div>
  );
};

export default AnimatedCard;
