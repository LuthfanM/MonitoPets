import React from "react";
import styles from "./BannerSection.module.css";

interface BannerSectionProps {
  imageSrc: string;
  reverse?: boolean;
  style?: React.CSSProperties
}

const BannerSection = ({ imageSrc, reverse, style }: BannerSectionProps) => {

  const styled = {
    flexDirection: reverse ? "row-reverse" : "row" as React.CSSProperties['flexDirection'],    
    ...style
  }

  return (
    <div
      className={styles.banner}
      style={styled}
    >
      <div className={styles.left_section}>
        <img src={`/images/banners/${imageSrc}`} alt="Banner Image" />
      </div>
      <div className={styles.right_section}>
        <h1 className={styles.small_text}>One More Friend</h1>
        <h1>Thousands More Fun!</h1>
        <p>
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <button>View Intro</button>
        <button>Explore Now</button>
      </div>
    </div>
  );
};

export default BannerSection;
