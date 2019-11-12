import React from 'react';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.container}>
    <div className={styles.loader}>
      <div className={styles.loaderDot}></div>
      <div className={styles.loaderDot}></div>
      <div className={styles.loaderDot}></div>
      <div className={styles.loaderDot}></div>
      <div className={styles.loaderDot}></div>
      <div className={styles.loaderDot}></div>
      <div className={styles.loaderText}></div>
    </div>
  </div>
);
export default Loader;
