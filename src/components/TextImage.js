import React from "react";
import styles from "./TextImage.module.css";

export default function TextImage({ textContent, imageSrc, imageAlt, imagePosition = "right" }) {
  return (
    <div className={styles.container}>
      {imagePosition === "left" && (
        <div className={styles.imageContainer}>
          <img src={imageSrc} alt={imageAlt} className={styles.image} />
        </div>
      )}
      
      <div className={styles.textContainer}>
        {textContent.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
      
      {imagePosition === "right" && (
        <div className={styles.imageContainer}>
          <img src={imageSrc} alt={imageAlt} className={styles.image} />
        </div>
      )}
    </div>
  );
} 
