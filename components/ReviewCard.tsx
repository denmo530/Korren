import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import Image from 'next/image';
import styles from '@/styles/ReviewCard.module.css';
import Rating from './Rating';

interface ReviewCardProps {
  title: string;
  body: string;
  date: Date;
  rating: number;
  showDeleteBtn?: boolean;
  images?: string[];
  onDelete?: () => void;
  onImage?: () => void;
}
// function ReviewCard({ title, body, date, rating }: ReviewCardProps) {
const ReviewCard: React.FC<ReviewCardProps> = ({
  title,
  body,
  date,
  rating,
  showDeleteBtn,
  images,
  onDelete,
  onImage
}) => {
  const [showFullComment, setShowFullComment] = useState<boolean>(false);

  const handleToggleComment = () => {
    setShowFullComment(!showFullComment);
  };

  const renderComment = () => {
    if (showFullComment || body.length <= 100) {
      return body;
    }

    return `${body.slice(0, 100)}...`;
  };

  const formattedDate = new Date(date).toDateString();

  // Reviews with no images have a slot with empty "" need to remove it
  const filteredImages = images?.filter((image) => image !== '');

  return (
    <div className={styles.card}>
      <div className={styles.deleteRow}>
        {showDeleteBtn && <AiOutlineDelete className={styles.deleteBtn} onClick={onDelete} />}
      </div>
      <div className={styles.header}>
        <h1>{title}</h1>
        <span className={styles.date}>{formattedDate}</span>
      </div>
      <div className={styles.secondaryRow}>
        <Rating rating={rating} />
      </div>
      <div className={styles.bodyRow}>
        <p className={styles.reviewBody}>{renderComment()}</p>
        {body.length > 100 && (
          <span className={styles.toggleBody} onClick={handleToggleComment}>
            {showFullComment ? 'Read Less' : 'Read More'}
          </span>
        )}
        {filteredImages && (
          <div className={styles.images}>
            {filteredImages.length === 0 ? (
              <div />
            ) : (
              filteredImages.map((image) => (
                <Image
                  className={styles.image}
                  key={image}
                  alt={image}
                  src={image}
                  width={100}
                  height={100}
                  onClick={onImage}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
