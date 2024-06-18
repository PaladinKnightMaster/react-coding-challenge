import React, { memo } from 'react';
import { ImageData } from '../types';
import styles from './ImageCard.module.css';

const ImageCard: React.FC<ImageData> = memo(({ title, description, url }) => (
  <div className={styles.imageCard}>
    <img src={url} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
));

export default ImageCard;
