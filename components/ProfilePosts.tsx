import { Review } from "@prisma/client";
import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import styles from "@/styles/Profile.module.css";
import DeleteReviewModal from "./modals/DeleteReviewModal";
import useDeleteReviewModal from "@/hooks/useDeleteReviewModal";
import ImageModal from "./modals/ImageModal";
import useImageModal from "@/hooks/useImageModal";

interface ProfilePostsProps {
  isLoading: boolean;
  reviews: Review[];
}

const ProfilePosts: React.FC<ProfilePostsProps> = ({ isLoading, reviews }) => {
  const [selectedReviewId, setSelectedReviewId] = useState<string>("");

  const deleteReviewModal = useDeleteReviewModal();
  const imageModal = useImageModal();

  const onDelete = (reviewId: string) => {
    setSelectedReviewId(reviewId); // Set the selected reviewId in state
    deleteReviewModal.onOpen();
  };

  const onImage = (reviewId: string) => {
    setSelectedReviewId(reviewId); // Set the selected reviewId in state
    imageModal.onOpen();
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : reviews.length > 0 ? (
        <div className={styles.wrapper}>
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              title={review.title}
              body={review.comment}
              date={review.createdAt}
              rating={review.rating}
              images={review.imageSrc}
              showDeleteBtn
              onDelete={() => onDelete(review.id)}
              onImage={() => onImage(review.id)}
            />
          ))}
        </div>
      ) : (
        <div>No reviews</div>
      )}
      <ImageModal selectedReviewId={selectedReviewId} />

      <DeleteReviewModal selectedReviewId={selectedReviewId} />
    </div>
  );
};

export default ProfilePosts;
