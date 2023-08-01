import styles from "../styles/Rating.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

interface Props {
  rating: number;
}

const Rating = ({ rating }: Props) => {
  const MAX_STARS = 5;
  // const FULL_STAR = <AiFillStar size={24} />;
  // const HALF_STAR = (
  //   <AiFillStar size={24} style={{ clipPath: "inset(0 50% 0 0)" }} />
  // );
  // const EMPTY_STAR = <AiOutlineStar size={24} />;

  const FULL_STAR = <BsStarFill size={24} />;
  const HALF_STAR = <BsStarHalf size={24} />;
  const EMPTY_STAR = <BsStar size={24} />;

  const stars = [];

  for (let i = 1; i <= MAX_STARS; i++) {
    if (i <= rating) {
      stars.push(FULL_STAR);
    } else if (i - rating < 1) {
      stars.push(HALF_STAR);
    } else {
      stars.push(EMPTY_STAR);
    }
  }

  return <div className={styles.ratingContainer}>{stars}</div>;
};

export default Rating;
