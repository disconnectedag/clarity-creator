import React from 'react';
import MainGoal from '../MainGoal/MainGoal';
import SubGoal from '../SubGoal/SubGoal';

const GoalContainer = ({ category }) => {
  return (
    <div>
      <MainGoal category={category} />
    </div>
  );
};

export default GoalContainer;
