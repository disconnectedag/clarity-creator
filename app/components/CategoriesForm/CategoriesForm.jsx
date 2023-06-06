import React from 'react';
import styles from './CategoriesForm.module.css';

const CategoriesForm = ({ category, setCategory }) => {
  return (
    <div className={styles.wrapper}>
      <div className="select-container">
        <label htmlFor="life-categories">Categories: </label>
        <select
          id="life-categories"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="physical health" selected>
            Fitness
          </option>
          <option value="mental health">Mental Health</option>
          <option value="spiritual health">Spirituality</option>
          <option value="finances">Finances</option>
          <option value="relationship">Romantic Relationship</option>
          <option value="career">Career</option>
          <option value="family">Family</option>
          <option value="friends">Friends</option>
        </select>
      </div>
      <div className="other-container">
        <label htmlFor="other">Other: </label>
        <input type="text" id="other" disabled />
      </div>
    </div>
  );
};

export default CategoriesForm;
