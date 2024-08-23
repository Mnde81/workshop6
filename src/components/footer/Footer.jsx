import React, { useState } from 'react';
import styles from './Footer.module.css'; // Correct import

const Footer = () => {
  const [language, setLanguage] = useState('English');
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setShowDropdown(false); 
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className={styles.emailForm}>
          <input type="email" placeholder="Enter your email address" className={styles.emailInput} />
          <button className={styles.getStartedButton}>Get Started</button>
        </div>
        <p className={styles.footerContact}>Questions? Contact us.</p>
      </div>

      <div className={styles.footerLinks}>
        <ul className={styles.footerList}>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Speed Test</a></li>
          <li><a href="#">Ad Choices</a></li>
        </ul>

        <ul className={styles.footerList}>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Cookie Preferences</a></li>
          <li><a href="#">Legal Guarantee</a></li>
        </ul>

        <ul className={styles.footerList}>
          <li><a href="#">Account</a></li>
          <li><a href="#">Ways to Watch</a></li>
          <li><a href="#">Corporate Information</a></li>
          <li><a href="#">Legal Notices</a></li>
        </ul>

        <ul className={styles.footerList}>
          <li><a href="#">Media Center</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Only on Netflix</a></li>
        </ul>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.languageDropdown}>
          <button className={styles.languageButton} onClick={toggleDropdown}>
            {language}
          </button>
          {showDropdown && (
            <div className={styles.dropdownMenu}>
              <button className={styles.dropdownItem} onClick={() => selectLanguage('English')}>English</button>
              <button className={styles.dropdownItem} onClick={() => selectLanguage('Lithuanian')}>Lithuanian</button>
            </div>
          )}
        </div>
        <p className={styles.country}>Netflix Lithuania</p>
      </div>
    </footer>
  );
};

export default Footer;