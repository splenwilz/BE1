import React from 'react';
import styles from '../styles.module.css';

const Loading: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.itemContainer}>
        <div className={styles.itemImage}></div>
        <div className={styles.itemDetails}>
          <div className={styles.itemTitle}></div>
          <div className={styles.itemDescription}></div>
        </div>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.itemImage}></div>
        <div className={styles.itemDetails}>
          <div className={styles.itemTitle}></div>
          <div className={styles.itemDescription}></div>
        </div>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.itemImage}></div>
        <div className={styles.itemDetails}>
          <div className={styles.itemTitle}></div>
          <div className={styles.itemDescription}></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
