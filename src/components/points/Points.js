import React from 'react';
import './points.css';
import CountUp from 'react-countup';
import GameContext from '../../contexts/gameContext';
import realTimeCtrl from '../../controllers/realTimeDb';
import _ from 'lodash';

const Points = () => {
  const game = React.useContext(GameContext);
 
  React.useEffect(() => {
    const userObj = _.find(game.leaderboard, ['username', game.userName]);
    if (!userObj) return;
    if (userObj['points'] > game.playerPoints){
      return;
    }
    realTimeCtrl.addUserPoints(game.userName, game.playerPoints);
  }, [game.playerPoints]);
  
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