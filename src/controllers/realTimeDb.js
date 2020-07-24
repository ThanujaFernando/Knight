import firebase from 'firebase';
import _ from 'lodash';
const database = firebase.database;

const realTimeCtrl = {

  addUserPoints : (username, points) => {
    firebase.database().ref('leaders/' + username).update({
      points: points,
    });
  },

  listenLeaderboard: (hookCallback) => {
    firebase.database().ref('/leaders').on('value', (data) => {
      const leaders = _.orderBy(Object.values(data.val()), ['points'], ['desc'])
      hookCallback(leaders);
    });
  }

};

export default realTimeCtrl;