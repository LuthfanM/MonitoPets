import React from 'react';
import styles from './CustomButton.module.css'; 

interface CustomButtonProps {
  text: string;
  onClick?: () => void; 
  className?: string;
  icon?: JSX.Element;
  type?: 'black' | 'transparent'
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, type, onClick, className, icon }) => {

const styleButton = type === 'transparent' ?  styles['transparentBg'] : styles['blackBg'];

  return (
    <button className={`${className} ${styles.button} ${styleButton}`} onClick={onClick}>
      <span className={styles.contentWrapper}>
        {text}
        {icon && <span className={styles.icon}>{icon}</span>}
      </span>
    </button>
  );
};

export default CustomButton;
