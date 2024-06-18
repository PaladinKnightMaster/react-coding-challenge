import React, { useEffect, useState, useCallback, useMemo, lazy, Suspense } from 'react';
import { fetchImages } from '../services/api';
import { ImageData } from '../types';
import styles from './ImageList.module.css';

const ImageCard = lazy(() => import('./ImageCard'));

const ImageList: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getImages = useCallback(async () => {
    try {
      const data = await fetchImages();
      setImages(data.data);
    } catch (error) {
      setError('Failed to fetch images');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getImages();
  }, [getImages]);

  const renderedImages = useMemo(() => images.map((image, index) => (
    <ImageCard key={index} {...image} />
  )), [images]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.imageList}>
      <Suspense fallback={<div>Loading...</div>}>
        {renderedImages}
      </Suspense>
    </div>
  );
};

export default ImageList;
