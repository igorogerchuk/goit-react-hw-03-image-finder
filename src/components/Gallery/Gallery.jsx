import React from 'react';
import PhotoCard from '../PhotoCard';
import styles from './Gallery.module.css';

const Gallery = ({ pictures }) => {
  return (
    <ul className={styles.gallery}>
      {pictures.map(picture => (
        <li key={picture.id}>
          <PhotoCard picture={picture} />
        </li>
      ))}
    </ul>
  );
};

export default Gallery;
