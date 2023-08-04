import { NextPage } from 'next';
import React from 'react';
import Link from 'next/link';
import useDorms from '@/hooks/useDorms';
import AnimatedCard from './AnimatedCard';
import styles from '../styles/AnimatedCard.module.css';

type Dorm = {
  label: string;
  value: string;
  distanceToCampus: string;
  distanceToCenter: string;
  image?: string;
  adress: string;
  description: string;
};

const AnimatedCardRow: NextPage = () => {
  const { getAll } = useDorms();
  const allDorms: Dorm[] = getAll();
  const dorms = allDorms.sort(() => 0.5 - Math.random());

  return (
    <div className={styles.container}>
      {dorms.map((dorm: Dorm) => (
        <Link
          href={{
            pathname: '/dorms/[name]',
            query: { name: dorm.label.toLowerCase() }
          }}
          key={dorm.value}>
          <AnimatedCard
            src={dorm.image || 'Placeholder img'}
            alt={dorm.label}
            title={dorm.label}
            message={dorm.description}
            key={dorm.value}
          />
        </Link>
      ))}
    </div>
  );
};

export default AnimatedCardRow;
