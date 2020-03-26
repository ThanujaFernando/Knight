import React from 'react';
import './App.css';
import Square from './components/Square';
import GameContext from './contexts/gameContext';
import knightController from './controllers/knightController';
import { useAlert } from 'react-alert'
import Messages from './gameSettings/messages';
import Settings from './gameSettings/settings';
import _ from 'lodash';

const generateGrid = () => {
  const SIZE = Settings.boardSize;
  let gridMap = [];
  for (let i=0; i<SIZE; i++){
    let rowMap = [<tr></tr>];
    for (let j=0; j<SIZE; j++){
      rowMap.push(<Square key={`${i},${j}`} gridIndex={[i,j]}/>);
    }
    gridMap = [gridMap, ...rowMap];
  }
  return gridMap;
};

const App = () => {
  const alert = useAlert()
  const [playerIndex, setPlayerIndex] = React.useState([0,0]);
  const [knightIndex, setKnightIndex] = React.useState([1,2]);
  const [isPlayerTurn, setIsPlayerTurn] = React.useState(true);
  const [currentKnightsPath, setCurrentKnightsPath] = React.useState([]);
  const [knightTime, setKnightTime] = React.useState(0);

  // move knight with delay
  const moveKnight = (path) => {
    path.forEach((eachPathIndex, i) => {
      setTimeout(() => {
        setKnightIndex(eachPathIndex);
        if (_.isEqual(playerIndex, eachPathIndex)){
          alert.info(Messages.gameOver)
        }
      }, i * 500);      
    });
    setTimeout(() => {
      setCurrentKnightsPath([]);
      setIsPlayerTurn(true);
      setTimeout(() => {
        setIsPlayerTurn(false);
        console.log('after 5')
      }, 5000);
    }, path.length * 500);
  };

  React.useEffect(() => {
    knightController.setup(Settings.boardSize);
  }, []);

  React.useEffect(() => {
    playComputer();
  }, [isPlayerTurn]);

  const playComputer = () => {
    if (!isPlayerTurn){
      const allPosibleIndexes = knightController.getPossibleKnight(knightIndex);
      const randomIndex = allPosibleIndexes[Math.floor(Math.random() * allPosibleIndexes.length)];
      const pathForRandomIndex = knightController.getKnigthPath(knightIndex,  randomIndex);
      setCurrentKnightsPath([knightIndex, ...pathForRandomIndex]);
      moveKnight([knightIndex, ...pathForRandomIndex]);
    }
  };

  return (
    <div className="content-center">
    {knightTime}
      {/* <button onClick={() => alert.info('Never underestimate a Knight!')} >  sadf</button> */}
    <table className="table-matrix" border="1" cellSpacing="0">
      <thead></thead>
      <tbody>
      <GameContext.Provider value={{
        playerIndex:playerIndex, setPlayerIndex:setPlayerIndex,
        knightIndex:knightIndex,
        isPlayerTurn,
        setIsPlayerTurn,
        currentKnightsPath
        }}>
        { generateGrid() }
      </GameContext.Provider>
      </tbody>
    </table>
    </div>
  );
}

export default App;
