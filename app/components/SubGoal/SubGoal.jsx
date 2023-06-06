import Link from 'next/link';
import React from 'react';
import { CornerDownRight } from 'react-feather';
import styles from './SubGoal.module.css';

const SubGoal = () => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="subgoal">
        What is ONE thing that you can do to move you closer towards this goal?
      </label>
      <textarea id="subgoal"></textarea>
    </div>
  );
};

export default SubGoal;
