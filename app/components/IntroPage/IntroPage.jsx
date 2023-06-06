'use client';

import React from 'react';
import CategoriesForm from '../CategoriesForm/CategoriesForm';
import GoalContainer from '../GoalContainer/GoalContainer';
import styles from './IntroPage.module.css';

const IntroPage = () => {
  const [category, setCategory] = React.useState('physical health');
  return (
    <div>
      <CategoriesForm setCategory={setCategory} category={category} />
      <h1>The Category is {category}</h1>
      <GoalContainer category={category} />
    </div>
  );
};

export default IntroPage;
