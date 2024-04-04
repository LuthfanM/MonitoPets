import React from "react";
import styles from "./Home.module.css";
import CustomButton from "@/components/Buttons/CustomButton";
import { FaPlayCircle } from "react-icons/fa";
import CustomTextArea from "@/components/TextArea/CustomTextArea";

const PromotionalSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.leftColumn}>
        <CustomTextArea
          title="One More Friend"
          subTitle="Thousands More Fun!"
          subtitle="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
        />
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.imageContainer}>
          <img
            src="/images/good_humored_woman_1.svg"
            alt="Happy person with a dog"
          />
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;
