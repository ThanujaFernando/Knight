import React from 'react';
import './points.css';
import CountUp from 'react-countup';
import GameContext from '../../contexts/gameContext';
import realTimeCtrl from '../../controllers/realTimeDb';

const Points = () => {
  const game = React.useContext(GameContext);
 
  React.useEffect(() => {
    if (!game.leaderboard[game.userName]) return;
    if (game.leaderboard[game.userName]['points'] > game.playerPoints){
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