import React from "react";
import styles from "./BannerSection.module.css";
import CustomTextArea from "@/components/TextArea/CustomTextArea";

interface BannerSectionProps {
  imageSrc: string;
  reverse?: boolean;
  style?: React.CSSProperties;
  textContent?: React.JSX.Element;
}

const BannerSection = ({
  imageSrc,
  reverse,
  style,
  textContent,
}: BannerSectionProps) => {
  const styled = {
    flexDirection: reverse
      ? "row-reverse"
      : ("row" as React.CSSProperties["flexDirection"]),
    ...style,
  };

  return (
    <div className={styles.banner} style={styled}>
      <div className={styles.left_section}>
        <img src={`/images/banners/${imageSrc}`} alt="Banner Image" />
      </div>
      <div className={styles.right_section}>{textContent}</div>
    </div>
  );
};

export default BannerSection;
