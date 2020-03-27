import React from 'react';
import './timer.css';

const Timer = ({duration, resetTimer, completed}) => {
  const [currentTime, setCurrentTime] = React.useState(0);

  const setTimer = () => {
    setTimeout(() => {
      if ((currentTime === duration)){
        setCurrentTime(0);
        completed();
      } else {
        setCurrentTime(currentTime + 1);
      }
    }, 1000);
  };

  React.useEffect(() => {
    setTimer();
  },[currentTime]);

  return (
    <div className="kchange-outer">
    <div id="progressbar">
        <div style={{width:`${100*currentTime/5}%`}}></div>
    </div>
      {/* <span>{currentTime}</span> */}
    </div>
  )
};

export default Timer;