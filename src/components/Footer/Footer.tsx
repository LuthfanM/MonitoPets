import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import HorizontalLine from '../Helpers/HorizontalLine';

const Footer = () => {
  return (
    <footer className='wrapperHeader' style={{ height: '440px', width: '100vw', borderRadius: '0px', alignContent: "center" }}>
      <div style={{ marginLeft: '130px', marginRight: '130px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className={styles.footerTop}>
          <button className={styles.footerButton}>Register Now So You Don&apos;t Miss Our Programs</button>
          <input type="email" placeholder="Enter your Email" className={styles.footerInput} />
          <button className={styles.footerSubscribe}>Subscribe Now</button>
        </div>
        <nav className={styles.footerNav}>
          <ul className={styles.footerNavList}>
            <li>Home</li>
            <li>Category</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className={styles.footerSocialLinks}>
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </nav>
        <HorizontalLine />
        <div className={styles.footerBottom}>
          <span>© 2022 Monito. All rights reserved.</span>
          <div className={styles.footerLogo}>
            {/* Update the path to your logo */}
            <img src="/images/logo.svg" alt="Monito Logo" />
          </div>
          <div className={styles.footerLegalLinks}>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
