import React, { useState, useCallback } from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';
import styles from '@/styles/SetRating.module.css';

interface StarRatingProps {
  value: number;
  onChange: (value: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ value, onChange }) => {
  const [rating, setRating] = useState<number>(value);
  const [, setHover] = useState<number>(value);

  const handleClickRating = useCallback(
    (ratingValue: number) => {
      setRating(ratingValue);
      onChange(ratingValue);
    },
    [onChange, setRating]
  );
  // const handleHoverRating = useCallback(
  //   (ratingValue: number) => {
  //     setHover(ratingValue);
  //     onChange(ratingValue);
  //   },
  //   [onChange, setHover]
  // );

  return (
    <div className=" flex flex-row justify-center mt-4 ">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              key={index}
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClickRating(ratingValue)}
              className={styles.radioInput}
            />
            {ratingValue <= rating ? (
              <BsStarFill
                key={index}
                className={styles.circle}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            ) : (
              <BsStar
                key={index}
                className={styles.circle}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            )}
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
