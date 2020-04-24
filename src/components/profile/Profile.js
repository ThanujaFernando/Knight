import React from 'react';
import GameContext from '../../contexts/gameContext';
import './profile.css';

const Profile = () => {
  
  const game = React.useContext(GameContext);
  
  return(
  <div className="profile-outer" onClick={()=>{window.location="/user"}}>
    <p title="click to change" className="user-name">{game.userName}</p>
  </div>
  );
};

export default Profile;