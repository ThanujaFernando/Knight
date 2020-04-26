import React from 'react';
import './leaderboard.css';
import Loader from 'react-loader-spinner';
import isMobile from '../../utils/isMobile';


const Leaderboard = ({ leadersList, userName }) => {

  const LoaderComp = () => {
    return (
      <div className="spinner-outer">
        <Loader
          type="TailSpin"
          color="#FFFFFF"
          height={50}
          width={50}
        />
      </div>
    );
  }

  return (
    <div className="leaderboard-wrapper" style={{display:`${isMobile()? 'None': 'block'}`}}>
      {leadersList.length === 0 ? LoaderComp() : null}
      <ol className="leaders">
        {leadersList.map((leader) =>
          <li key={leader.username} 
          className={`leader ${leader.username === userName ? 'leader-me' : ''}`}>
            {leader.username} - {leader.points}
          </li>
        )}
      </ol>
    </div>
  );
};

export default Leaderboard;