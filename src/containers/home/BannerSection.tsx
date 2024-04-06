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
import { useScreenDimensions } from "@/contexts/ScreenDimensionProvider";
import { MAX_WIDTH_PHONE } from "@/constants";

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
  hideIfMobile?: boolean
}

const BannerSection = ({
  imageSrc,
  reverse,
  style,
  textContent,
  rightStyle,
  leftStyle,
  hideIfMobile,
}: BannerSectionProps) => {
  const { width, height } = useScreenDimensions();

  const rowOrColumn = () => {
    if (width <= MAX_WIDTH_PHONE) {
      return reverse ? "column-reverse" : "column-reverse";
    } else {
      return reverse ? "row-reverse" : "row";
    }
  };

  const styled: React.CSSProperties = {
    display: hideIfMobile ? "none" : "flex",
    flexDirection: rowOrColumn(),
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
