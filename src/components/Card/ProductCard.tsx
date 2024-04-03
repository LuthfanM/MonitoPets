import React from 'react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  category: string;
  size: string;
  price: string;
  promoText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, category, size, price, promoText }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.cardImage} />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardCategory}>{category}</p>
        <p className={styles.cardSize}>Product: {size}</p>
        <div className={styles.cardPrice}>{price}</div>
        <div className={styles.cardPromo}>
          <span className={styles.promoIcon}>🎁</span>
          <span className={styles.promoText}>{promoText}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
