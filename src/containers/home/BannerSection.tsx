import React from 'react';
import styles from './BannerSection.module.css'

const BannerSection = ({reverse}:{reverse?: boolean}) => {

  return (
    <div className={styles.banner} style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
      <div className={styles.left_section}>
        <img src="path-to-your-image.jpg" alt="Person holding a pet" />
        <p className={styles.small_text}>One More Friend</p>
      </div>
      <div className={styles.right_section}>
        <h1>Thousands More Fun!</h1>
        <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
        <button>View Intro</button>
        <button>Explore Now</button>
      </div>
    </div>
  )
}

export default BannerSection