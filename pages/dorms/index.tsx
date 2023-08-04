import Link from 'next/link';
import styles from '@/styles/Dorms.module.css';
import AnimatedCard from '@/components/AnimatedCard';

import useDorms from '@/hooks/useDorms';

type Dorm = {
  label: string;
  value: string;
  distanceToCampus: string;
  distanceToCenter: string;
  image?: string;
  adress: string;
  description: string;
};

const Dorms = () => {
  const { getAll } = useDorms();
  const dorms = getAll();
  return (
    <>
      <div className={styles.title}>Norrköping</div>
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

export default Dorms;
