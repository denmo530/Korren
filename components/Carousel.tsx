import React, { useState } from 'react';
import Image from 'next/image';
import { Review } from '@prisma/client';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import styles from '@/styles/Carousel.module.css';

interface GalleryProps {
  reviews: Review[];
  dormImage?: string;
}
const Gallery: React.FC<GalleryProps> = ({ reviews, dormImage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = reviews?.map((review: Review) => review.imageSrc);

  const flattenedArray: string[] = flattenArray(images);
  if (dormImage) flattenedArray.unshift(dormImage);

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

  function flattenArray<T>(arr: (T | T[])[]): T[] {
    let tempArr: T[] = [];

    arr?.forEach((element) => {
      if (Array.isArray(element)) {
        tempArr = tempArr.concat(flattenArray(element));
      } else if (element !== '') {
        tempArr.push(element);
      }
    });

    return tempArr;
  }

  return (
    <div className={styles.sliderStyles}>
      <div className={styles.arrowContainer}>
        <button type="button" className={styles.leftArrow} onClick={handlePrevImage}>
          <AiOutlineLeft size={24} />
        </button>
        <button type="button" className={styles.rightArrow} onClick={handleNextImage}>
          <AiOutlineRight size={24} />
        </button>
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
