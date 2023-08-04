import React, { useState } from 'react';
import { FiCircle } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa';
import styles from '../styles/SetRating.module.css';

const StarRating = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              className={styles.radioInput}
            />
            {ratingValue <= rating ? (
              <FaCircle
                className={styles.circle}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            ) : (
              <FiCircle
                className={styles.circle}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            )}
          </label>
        );
      })}
      <div>The rating is {rating}</div>
    </div>
  );
};

export default StarRating;

// import React, {use, useState} from "react";
// import { FiCircle } from "react-icons/fi";
// import { FaCircle } from "react-icons/fa";
// import styles from '../styles/SetRating.module.css';

// const StarRating = () => {
//     const [rating, setRating] = useState<number>(0);
//     const [hover, setHover] = useState<number>(0);

//     return (
//         <div>
//             {[...Array(5)].map((star, index) => {
//                 const ratingValue = index + 1;
//                 return (
//                     <label key={index}>
//                         <input
//                         type="radio"
//                         name="rating"
//                         value = {ratingValue}
//                         onClick={() => setRating(ratingValue)}

//                         className={styles.radioInput}
//                         />
//                         <FiCircle
//                         className={styles.circle}
//                         color={ratingValue <= (hover || rating) ? "#da6a00" : "e4e5e9"}
//                         size={100}
//                         onMouseEnter={() => setHover(ratingValue)}
//                         onMouseLeave={() => setHover(0)}
//                         />
//                     </label>
//                 );
//             })}
//             <div>The rating is {rating}</div>
//         </div>
//     );
// };

// export default StarRating;
