import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Dorm } from "@prisma/client";

const useDorms = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/dorm", fetcher);
  let formattedDorms: any = [];

  if (!isLoading) {
    formattedDorms = data.map((dorm: Dorm) => ({
      value: dorm.id,
      label: dorm.name,
      distanceToCampus: dorm.distanceToCampus,
      distanceToCenter: dorm.distanceToCenter,
      image: dorm.image,
      adress: dorm.adress,
      description: dorm.description,
    }));
  }

  const getAll = () => formattedDorms;

  const getByValue = (value: string) => {
    return data.find((dorm: any) => dorm.value === value);
  };

  return {
    getAll,
    getByValue,
    error,
    isLoading,
    mutate,
  };
};

export default useDorms;
