import Link from 'next/link';
import Section from '@/components/Section';
import AnimatedCard from '@/components/AnimatedCard';
import useDorms from '@/hooks/useDorms';
import HeroBanner from '@/components/HeroBanner';
import styles from '../styles/Home.module.css';

type Dorm = {
  label: string;
  value: string;
  distanceToCampus: string;
  distanceToCenter: string;
  image?: string;
  adress: string;
  description: string;
};

const Home = () => {
  const { getAll } = useDorms();
  const dorms = getAll().sort(() => 0.5 - Math.random());
  return (
    <>
      <HeroBanner />
      <Section />
      <div className={styles.container}>
        {dorms?.map((dorm: Dorm) => (
          <Link
            href={{
              pathname: '/dorms/[name]',
              query: { name: dorm?.label.toLowerCase() }
            }}
            key={dorm?.value}>
            <AnimatedCard
              src={dorm?.image || 'Placeholder img'}
              alt={dorm?.label}
              title={dorm?.label}
              message={dorm?.description}
              key={dorm?.value}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
