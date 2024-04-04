import React from 'react';
import styles from './MainCard.module.css';
import { FaCircle } from "react-icons/fa";

interface CardProps {
  imageSrc: string;
  title: string;
  gender: string;
  age: string;
  price: string;
  promo?: string
}

const MainCard: React.FC<CardProps> = ({ imageSrc, title, gender, age, price, promo }) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={title} className={styles.cardImage} />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardInfo}>
          <span className={styles.cardGender}>{gender}</span>
          <FaCircle className={styles.circleGrey1} />
          <span className={styles.cardAge}>{age}</span>
        </div>
        <div className={styles.cardPrice}>{price}</div>
        {promo &&
          <div className={styles.cardPromo}>
            <span className={styles.promoIcon}>🎁</span>
            <FaCircle className={styles.circleGrey1} />
            <span className={styles.promoText}>{promo}</span>
          </div>
        }
      </div>
    </div>
  );
};

export default MainCard;
