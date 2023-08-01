import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Review } from "@prisma/client";

const useDormReviews = (dormId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/reviews/${dormId}`,
    fetcher
  );

  return { data, error, isLoading, mutate };
};

export default useDormReviews;
