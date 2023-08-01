import React, { useState } from "react";
import Modal from "./Modal";
import useImageModal from "@/hooks/useImageModal";
import Image from "next/image";
import useUserReviews from "@/hooks/useUserReviews";
import { Review } from "@prisma/client";
import styles from "@/styles/ImageModal.module.css";

interface ImageModalProps {
  selectedReviewId: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ selectedReviewId }) => {
  const imageModal = useImageModal();
  const { data: reviews, error, isLoading } = useUserReviews();

  const [currentImage, setCurrentImage] = useState(0);

  const filteredReviews =
    selectedReviewId &&
    reviews.find((review: Review) => review.id === selectedReviewId);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === filteredReviews.imageSrc?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? filteredReviews.imageSrc?.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (imageIndex: number) => {
    setCurrentImage(imageIndex);
  };

  const bodyContent = (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        alignItems: "center",
        width: "100%",
      }}
    >
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.currentImage}>
          {filteredReviews && (
            <Image
              alt=""
              fill
              src={filteredReviews.imageSrc[currentImage]}
              className={styles.thumbnail}
            />
          )}
        </div>
      )}
    </div>
  );

  const footer = (
    <div className={styles.images}>
      {filteredReviews &&
        filteredReviews.imageSrc.length > 1 &&
        filteredReviews.imageSrc?.map((image: any, index: number) => (
          <Image
            alt=""
            width={100}
            height={100}
            src={image}
            key={index}
            className={styles.image}
            onClick={() => goToIndex(index)}
          />
        ))}
    </div>
  );

  return (
    <Modal
      isOpen={imageModal.isOpen}
      title="Images"
      actionLabel="Next"
      onSubmit={handleNextImage}
      secondaryAction={handlePrevImage}
      secondaryActionLabel="Previous"
      onClose={imageModal.onClose}
      body={bodyContent}
      footer={footer}
    />
  );
};

export default ImageModal;
