import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Review } from "@prisma/client";

const useUserReviews = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/reviews/userReviews",
    fetcher
  );

  return { data, error, isLoading, mutate };
};

export default useUserReviews;
