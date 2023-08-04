import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import styles from '../styles/Rating.module.css';

interface Props {
  rating: number;
}

const Rating = ({ rating }: Props) => {
  const MAX_STARS = 5;
  const FULL_STAR = <BsStarFill size={24} />;
  const HALF_STAR = <BsStarHalf size={24} />;
  const EMPTY_STAR = <BsStar size={24} />;

  const stars = [];

  for (let i = 1; i <= MAX_STARS; i++) {
    if (i <= rating) {
      stars.push(<span key={i}>{FULL_STAR}</span>);
    } else if (i - rating < 1) {
      stars.push(<span key={i}>{HALF_STAR}</span>);
    } else {
      stars.push(<span key={i}>{EMPTY_STAR}</span>);
    }
  }

  return <div className={styles.ratingContainer}>{stars}</div>;
};

export default Rating;
