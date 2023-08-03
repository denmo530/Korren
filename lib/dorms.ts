import { Dorm } from "@prisma/client";

const baseUrl =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

export async function getAllDormNames() {
  try {
    const response = await fetch(`${baseUrl}/api/dorm`);
    const data = await response.json();
    const dormNames = data.map((dorm: Dorm) => dorm.name);
    return dormNames.map((dormName: string) => {
      return {
        params: {
          name: dormName.toLowerCase(),
        },
      };
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get dorm names");
  }
}

export async function getDormData(name: string) {
  try {
    const res = await fetch(`${baseUrl}/api/dorm`);
    const data = await res.json();
    const filteredDorm = data.find(
      (dorm: Dorm) => dorm.name.toLowerCase() === name.toLowerCase()
    );

    if (!filteredDorm) throw new Error("Dorm not found");

    // Fetch reviews
    const reviewsResponse = await fetch(
      `${baseUrl}/api/reviews/${filteredDorm.id}`
    );
    const reviewsData = await reviewsResponse.json();

    return {
      ...filteredDorm,
      reviews: reviewsData,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get dorm");
  }
}
