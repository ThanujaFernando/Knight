import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from './components/Alert';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserNameInput from './components/userNameInput/UserNameInput';
import * as firebase from "firebase/app";
import config from './configs/config';
 
firebase.initializeApp(config.firebaseConfig);

// alert cofiguration
const alertOptions = {
  position: positions.TOP_CENTER,
  timeout: 1500,
  offset: '0px',
  transition: transitions.SCALE
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/user" component={UserNameInput} exact/>
        </Switch>
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
