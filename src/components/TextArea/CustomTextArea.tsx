import React from "react";
import styles from "./CustomTextArea.module.css";
import CustomButton from "../Buttons/CustomButton";
import { FaPlayCircle } from "react-icons/fa";

type CustomTAProps = {
  title: string;
  titleIcon?: React.JSX.Element;
  subTitle: string;
  subtitle: string;
};

const CustomTextArea = ({
  title,
  titleIcon,
  subTitle,
  subtitle,
}: CustomTAProps) => {
  return (
    <div>
      <h1 className={styles.title}>
        {title} {titleIcon && titleIcon}{" "}
      </h1>
      <h3 className={styles.sub_title}>{subTitle}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.buttonsContainer}>
        <CustomButton
          text="View Intro"
          type="white"
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
