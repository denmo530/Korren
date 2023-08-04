import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useUserReviews = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/reviews/userReviews', fetcher);

  return { data, error, isLoading, mutate };
};

export default useUserReviews;
