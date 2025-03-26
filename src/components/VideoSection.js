import React from 'react';
import styles from './VideoSection.module.css';

const VideoSection = ({ title, videoId, videoTitle, backgroundColor, titleColor, marginTop }) => {
  return (
    <div className={styles.videoContainer} style={{ backgroundColor, marginTop }}>
      <h2 className={styles.videoTitle} style={{ color: titleColor }}>
        {title.includes(' ') ? (
          <>
            {title.split(' ').slice(0, -2).join(' ')} <br /> 
            {title.split(' ').slice(-2).join(' ')}
          </>
        ) : (
          title
        )}
      </h2>
      <div className={styles.videoWrapper}>
        <iframe
          className={styles.video}
          src={`https://www.youtube.com/embed/${videoId}`}
          title={videoTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          width="100%"
          height="400px"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection; 