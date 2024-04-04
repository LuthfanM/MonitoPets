"use client";
import React from "react";
import styles from "./BannerSection.module.css";
import {
  customrightstyles,
  RightSection,
} from "@/components/Banner/RightSection";
import {
  customleftstyles,
  LeftSections,
} from "@/components/Banner/LeftSection";

interface BannerSectionProps {
  imageSrc: {
    url: string;
    styles?: React.CSSProperties;
  };
  reverse?: boolean;
  style?: React.CSSProperties;
  textContent?: React.ReactNode;
  rightStyle?: customrightstyles;
  leftStyle?: customleftstyles;
}

const BannerSection = ({
  imageSrc,
  reverse,
  style,
  textContent,
  rightStyle,
  leftStyle,
}: BannerSectionProps) => {
  const styled: React.CSSProperties = {
    display: "flex",
    flexDirection: reverse ? "row-reverse" : "row",
    ...style,
  };

  const styleImage = imageSrc.styles || {};

  return (
    <div className={styles.banner} style={styled}>
      <LeftSections customleftstyles={leftStyle || {}}>
        <img
          src={`/images/banners/${imageSrc.url}.png`}
          alt="Banner Image"
          style={{ zIndex: 100, ...styleImage }}
        />
      </LeftSections>
      <RightSection customrightstyles={rightStyle || {}}>
        {textContent}
      </RightSection>
    </div>
  );
};

export default BannerSection;
