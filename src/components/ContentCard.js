import React from 'react';
import Image from 'next/image';
import Diamond from './diamond';
import styles from './ContentCard.module.css';

const ContentCard = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  description, 
  linkUrl, 
  isButton = true,
  showIcon = true,
  showButton = true,
  showImage = true,
}) => {
  return (
    <div className={styles.serviceCard}>
      {showImage && (
        <div className={styles.serviceImageContainer}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={300}
            className={styles.serviceImage}
          />
        </div>
      )}
      <div className={styles.serviceDiamond}>
        <div className={styles.diamondTitleContainer}>
          {showIcon && (
            <span className={styles.diamondIcon}><Diamond /></span>
          )}
          <h3 className={styles.serviceTitle}>{title}</h3>
        </div>
      </div>
      <p className={styles.serviceDescription}>
        {description}
      </p>
      {showButton && (
        <a href={linkUrl} className={styles.serviceLink}>
          {isButton ? (
            <button className={styles.serviceButton}>Ver más</button>
          ) : (
            "Ver más →"
          )}
        </a>
      )}
    </div>
  );
};

export default ContentCard; 