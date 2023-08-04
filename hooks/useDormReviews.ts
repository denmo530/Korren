import useSWR from 'swr';
import { Review } from '@prisma/client';
import fetcher from '@/lib/fetcher';

const useDormReviews = (dormId: string) => {
  const { data, error, isLoading, mutate } = useSWR(`/api/reviews/${dormId}`, fetcher);

  return { data, error, isLoading, mutate };
};

export default useDormReviews;
