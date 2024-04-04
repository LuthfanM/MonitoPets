import React from "react";
import styles from "./CustomTextArea.module.css";
import CustomButton from "../Buttons/CustomButton";
import { FaPlayCircle } from "react-icons/fa";
import { determineValue } from "@/helpers";

type CustomTAProps = {
  title: string;
  titleIcon?: React.JSX.Element;
  subTitle: string;
  subtitle: Record<string, any>;
  reverse?: boolean;
  status: "justify" | "center" | "right" | "left";
};

const CustomTextArea = ({
  title,
  titleIcon,
  subTitle,
  subtitle,
  reverse,
  status = "justify",
}: CustomTAProps) => {
  const styled = {
    flexDirection: reverse
      ? "row-reverse"
      : ("row" as React.CSSProperties["flexDirection"]),
    justifyContent: determineValue(status),
  };

  return (
    <div style={{ zIndex: 100, width: "inherit", textAlign: status }}>
      <h1 className={styles.title}>
        {title} {titleIcon && titleIcon}{" "}
      </h1>
      <h3 className={styles.sub_title}>{subTitle}</h3>
      <p className={styles.subtitle} style={subtitle.styles}>{subtitle.text}</p>
      <div className={styles.buttonsContainer} style={styled}>
        <CustomButton
          text="View Intro"
          type="transparent"
          //   onClick={() => console.log("clicked")}
          icon={<FaPlayCircle />}
        />
        <CustomButton
          text="Explore Now"
          //   onClick={() => console.log("clicked")}
        />
      </div>
    </div>
  );
};

export default CustomTextArea;
