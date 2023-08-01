import Image from "next/image";
import styles from "../styles/Card.module.css";

//interface CardProps
export type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image src={imageUrl} alt={title} width={250} height={300} />
      </div>
      <div className={styles.cardText}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
