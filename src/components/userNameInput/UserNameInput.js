import React from 'react';
import './usernameinput.css';
import { IoIosRocket } from 'react-icons/io';
import { Redirect } from 'react-router-dom';
import isMobile from '../../utils/isMobile';

const UserNameInput = () => {
  const [userName, setUserName] = React.useState('')
  const [allSet, setAllSet] = React.useState(false);

  const isValidUserName = (username) => {
    if (username == null || username.length <= 0){
      return false;
    }
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    if (username.match(usernameRegex) == null){
      return false;
    }
    return true;
  };

  const saveUserName = () => {
    if (isValidUserName(userName)){
      localStorage.setItem('user-name', userName.replace(/ /g,""));
      setAllSet(true);
      return;
    }
    window.alert('Only A-Z a-z 0-9. No spaces!');
  };

  return (
    <>
    { allSet ? <Redirect to="/" /> : null}
    <div className='username-wrapper' 
    style={{flexDirection:`${isMobile() ? 'column' : 'row'}`}}>
      <input onChange={(e) => setUserName(e.target.value)} className="username-input"  type="text" placeholder="Enter your name"></input>
      <button className="submit-div" onClick={() => saveUserName()}>
        <IoIosRocket size={40}></IoIosRocket>
      </button>
    </div>
    </>
  );
}

export default UserNameInput;