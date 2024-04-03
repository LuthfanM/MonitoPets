import React from 'react';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
  imageSrc: string;
  category: string;
  title: string;
  summary: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ imageSrc, category, title, summary }) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <div className={styles.cardCategory}>{category}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardSummary}>{summary}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
