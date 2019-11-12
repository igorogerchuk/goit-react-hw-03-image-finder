import React from 'react';
import styles from './LoadMoreButton.module.css';

const LoadMoreButton = ({ onLoadMore }) => (
  <button className={styles.button} type="button" onClick={onLoadMore}>
    Load more
  </button>
);

export default LoadMoreButton;
