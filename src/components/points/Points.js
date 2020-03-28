import React from 'react';
import './points.css';
import CountUp from 'react-countup';
import GameContext from '../../contexts/gameContext';

const Points = () => {
  const game = React.useContext(GameContext)
  return (
    <div className="outer-wrapper">
      <div className="outer">
        <h3 className="points-text">
          <CountUp preserveValue={true} end={game.playerPoints} />
          </h3>
      </div>
    </div>
  );
};

export default Points;