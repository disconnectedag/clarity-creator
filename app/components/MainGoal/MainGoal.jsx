import React from 'react';
import { CornerRightDown } from 'react-feather';
import SubGoal from '../SubGoal/SubGoal';

const MainGoal = ({ category }) => {
  const [mainGoalText, setMainGoalText] = React.useState('');
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <div>
      <label htmlFor="main">
        What is ONE thing you desire most from {category}?
      </label>
      <textarea
        value={mainGoalText}
        onChange={(e) => setMainGoalText(e.target.value)}
        id="main"
      />
      <button onClick={() => setIsClicked(true)}>
        <CornerRightDown />
      </button>
      {isClicked && <SubGoal />}
    </div>
  );
};

export default MainGoal;
