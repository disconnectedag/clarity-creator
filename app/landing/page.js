import React from 'react';
import styles from './page.module.css';
import IntroPage from '../components/IntroPage/IntroPage';

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <p>To begin, choose a category that you are seeking clarity on</p>
      <IntroPage />
    </div>
  );
};

export default Page;
