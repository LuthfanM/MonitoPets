import React from 'react';
import styles from './Home.module.css';
import CustomButton from '@/components/Buttons/CustomButton';
import { FaAngleRight } from "react-icons/fa";

interface PetsSectionProps {
  mainText?: string;
  subMainText: string;
  content: Array<React.ReactNode>;
  buttonText?: string
  columns?: number;
  style?: React.CSSProperties
}

const PetsSection = ({ mainText, subMainText, content, buttonText, columns, style }: PetsSectionProps) => {

  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    ...style
  };

  return (
    <section className={styles.petsSection}>
      <div className={styles.petsSectionContainer}>
        <div>
          {mainText && <p style={{ textAlign: 'left' }}>{mainText}</p>}
          <h2 style={{ textAlign: 'left' }}>{subMainText}</h2>
        </div>
        <CustomButton text={buttonText ? buttonText : 'View More'} type='white' icon={<FaAngleRight />} />
      </div>
      <div className={styles.cardsContainer} style={gridStyle}>
        {content}
      </div>
    </section>
  );
};

export default PetsSection;
