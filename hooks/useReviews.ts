import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useReviews = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/reviews', fetcher);

  return { data, error, isLoading, mutate };
};

export default useReviews;
