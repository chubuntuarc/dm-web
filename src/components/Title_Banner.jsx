import React from 'react';
import { FaDiamond } from 'react-icons/fa6';
import styles from './title_banner.module.css';
import Diamond from './diamond';

const Title_Banner = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Diamond className={styles.icon} />
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
};

export default Title_Banner;
