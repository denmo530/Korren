import React, { useState } from "react";
import Image from "next/image";
import { Review } from "@prisma/client";
import styles from "@/styles/Carousel.module.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface GalleryProps {
  reviews: Review[];
  dormImage?: string;
}
const Gallery: React.FC<GalleryProps> = ({ reviews, dormImage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === flattenedArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? flattenedArray.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
  };

  let images = reviews?.map((review: Review) => review.imageSrc);

  function flattenArray(arr: any) {
    let flattenedArray: any = [];

    arr?.forEach((element: any) => {
      if (Array.isArray(element)) {
        flattenedArray = flattenedArray.concat(flattenArray(element));
      } else if (element !== "") {
        flattenedArray.push(element);
      }
    });

    return flattenedArray;
  }

  const flattenedArray = flattenArray(images);
  flattenedArray.unshift(dormImage);

  return (
    <div className={styles.sliderStyles}>
      <div className={styles.arrowContainer}>
        <div className={styles.leftArrow} onClick={handlePrevImage}>
          <AiOutlineLeft size={24} />
        </div>
        <div className={styles.rightArrow} onClick={handleNextImage}>
          <AiOutlineRight size={24} />
        </div>
        <Image
          alt=""
          className={styles.mainImage}
          width={500}
          height={200}
          src={flattenedArray[currentImageIndex]}
        />
      </div>
      <div className={styles.thumbnails}>
        {flattenedArray.map((image: any, index: number) => (
          <Image
            className={styles.smallImages}
            key={index}
            alt=""
            width={100}
            height={100}
            src={image}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
