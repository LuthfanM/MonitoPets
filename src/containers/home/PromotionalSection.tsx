import React from 'react';
import styles from './Home.module.css';
import CustomButton from '@/components/Buttons/CustomButton';
import { FaPlayCircle } from 'react-icons/fa';

const PromotionalSection = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.leftColumn}>
                <h1 className={styles.title}>One More Friend</h1>
                <h3 className={styles.sub_title}>Thousands More Fun!</h3>
                <p className={styles.subtitle}>
                    Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                </p>
                <div className={styles.buttonsContainer}>
                    <CustomButton text="View Intro" type='white' onClick={() => console.log("clicked")} icon={<FaPlayCircle />} />
                    <CustomButton text="Explore Now" onClick={() => console.log("clicked")} />
                </div>
            </div>
            <div className={styles.rightColumn}>
                <div className={styles.imageContainer}>
                    <img src="/images/good_humored_woman_1.svg" alt="Happy person with a dog" />
                </div>
            </div>
        </section>
    );
};

export default PromotionalSection;
