import React, { Suspense } from 'react';
import styles from './HomePage.module.css';

const ImageList = React.lazy(() => import('../components/ImageList'));

const HomePage: React.FC = () => (
  <div className={styles.app}>
    <header className={styles.header}>
      <h1>Image Gallery</h1>
    </header>
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ImageList />
      </Suspense>
    </main>
  </div>
);

export default HomePage;
