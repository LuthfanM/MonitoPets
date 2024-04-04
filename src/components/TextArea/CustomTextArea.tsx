import React from "react";
import styles from "./CustomTextArea.module.css";
import CustomButton from "../Buttons/CustomButton";
import { FaPlayCircle } from "react-icons/fa";

type CustomTAProps = {
    title: string;
    subTitle: string;
    subtitle: string;
}

const CustomTextArea = ({ title, subTitle, subtitle }: CustomTAProps) => {

  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.sub_title}>{subTitle}</h3>
      <p className={styles.subtitle}>
        {subtitle}
      </p>
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
