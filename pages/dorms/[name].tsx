import { useState } from "react";
import { getAllDormNames, getDormData } from "@/lib/dorms";
import { Review } from "@prisma/client";
import styles from "@/styles/name.module.css";
import Rating from "@/components/Rating";
import ReviewCard from "@/components/ReviewCard";
import SortingButton from "@/components/SortingButton";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import { BsArrowLeft, BsSortDown } from "react-icons/bs";
import useImageModal from "@/hooks/useImageModal";
import ImageModal from "@/components/modals/ImageModal";
import prismadb from "@/lib/prismadb";
import { GetServerSidePropsContext } from "next";

type Dorm = {
  name: string;
  value: string;
  distanceToCampus: string;
  distanceToCenter: string;
  image?: string;
  adress: string;
  reviews: Review[];
};

const baseUrl =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

// export async function getStaticPaths() {
//   try {
//     const dorms = await prismadb.dorm.findMany();
//     if (dorms) {
//       const dormNames = dorms.map((dorm) => dorm.name);
//       const paths = dormNames.map((dormName: string) => {
//         return {
//           params: {
//             name: dormName.toLowerCase(),
//           },
//         };
//       });

//       return {
//         paths,
//         fallback: false,
//       };
//     }
//   } catch (error) {
//     console.error(error);
//     return {
//       paths: [],
//       fallback: false,
//     };
//   }
// }

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const name = context.params?.name as string; // Get dynamic parameter directly from context
  if (!name) {
    return {
      props: {
        dorm: null,
      },
    };
  }
  try {
    const dorms = await prismadb.dorm.findMany();
    if (dorms) {
      const filteredDorm = dorms.find(
        (dorm) => dorm.name.toLowerCase() === name.toLowerCase()
      );

      if (!filteredDorm) throw new Error("Dorm not found");

      // Fetch reviews
      const reviews = await prismadb.review.findMany({
        where: {
          dormId: String(filteredDorm.id),
        },
      });
      const parsedReviews = reviews.map((review) => {
        return {
          ...review,
          createdAt: JSON.parse(JSON.stringify(review.createdAt)),
        };
      });

      const dorm = {
        ...filteredDorm,
        reviews: parsedReviews,
      };

      return {
        props: {
          dorm,
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      props: {
        dorm: null,
      },
    };
  }
}

export default function Name({ dorm }: { dorm: Dorm }) {
  const [sortBy, setSortBy] = useState<"rating" | "date">("date");

  const sortedReviews = [...dorm?.reviews].sort((a: Review, b: Review) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    } else {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  });

  const totalRating = dorm?.reviews.reduce(
    (sum: number, review: Review) => sum + review.rating,
    0
  );
  const averageRating = totalRating / dorm?.reviews.length;

  const handleSortByRating = () => {
    setSortBy("rating");
  };

  const handleSortByDate = () => {
    setSortBy("date");
  };

  return (
    <div className={styles.container}>
      {!dorm ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className={styles.header}>
            <h1>{dorm?.name}</h1>
            <Rating rating={averageRating} />
            <h4>{dorm?.adress}, Norrköping</h4>
          </div>
          <div className={styles.gallery}>
            <Carousel reviews={dorm?.reviews} dormImage={dorm?.image} />
          </div>
          <div className={styles.sorting}>
            <div className={styles.sortingLeft}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                href="/dorms"
              >
                <BsArrowLeft size={20} />
                <span style={{ marginLeft: "10px" }}>Dorms</span>
              </Link>
            </div>
            <SortingButton
              label="Sort by Rating"
              onClick={handleSortByRating}
              outline={sortBy !== "rating"}
            />
            <SortingButton
              label="Sort by Date"
              onClick={handleSortByDate}
              outline={sortBy !== "date"}
              // icon={BsSortDown}
            />
          </div>

          <div className={styles.main}>
            {sortedReviews.map((review: Review) => (
              <ReviewCard
                title={review.title}
                body={review.comment}
                rating={review.rating}
                key={review.id}
                date={review.createdAt}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
