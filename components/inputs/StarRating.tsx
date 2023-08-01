import React, { useState, useCallback } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "@/styles/SetRating.module.css";
import { BsStarFill, BsStar } from "react-icons/bs";

interface StarRatingProps {
  value: number;
  onChange: (value: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ value, onChange }) => {
  const [rating, setRating] = useState<number>(value);
  const [hover, setHover] = useState<number>(value);

  const handleClickRating = useCallback(
    (ratingValue: number) => {
      setRating(ratingValue);
      onChange(ratingValue);
    },
    [onChange, setRating]
  );
  const handleHoverRating = useCallback(
    (ratingValue: number) => {
      setHover(ratingValue);
      onChange(ratingValue);
    },
    [onChange, setHover]
  );

  return (
    <div>
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
      <div>The rating is {value}</div>
    </div>
  );
};

export default StarRating;
