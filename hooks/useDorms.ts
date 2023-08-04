import useSWR from 'swr';
import { Dorm } from '@prisma/client';
import fetcher from '@/lib/fetcher';

const useDorms = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/dorm', fetcher);
  const dorms: Dorm[] = data;
  let formattedDorms: any[] = [];

  if (!isLoading) {
    formattedDorms = dorms.map((dorm: Dorm) => ({
      value: dorm.id,
      label: dorm.name,
      distanceToCampus: dorm.distanceToCampus,
      distanceToCenter: dorm.distanceToCenter,
      image: dorm.image,
      adress: dorm.adress,
      description: dorm.description
    }));
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const getAll = () => formattedDorms;

  const getByValue = (value: string) => {
    return dorms.find((dorm: Dorm) => dorm.id === value);
  };

  return {
    getAll,
    getByValue,
    error,
    isLoading,
    mutate
  };
};

export default useDorms;
