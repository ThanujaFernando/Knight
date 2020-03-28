import React from 'react';
import './App.css';
import Square from './components/Square';
import GameContext from './contexts/gameContext';
import knightController from './controllers/knightController';
import { useAlert } from 'react-alert'
import Messages from './gameSettings/messages';
import Settings from './gameSettings/settings';
import _ from 'lodash';
import Timer from './components/timer/Timer';
import Points from './components/points/Points';

const generateGrid = () => {
  const SIZE = Settings.boardSize;
  let gridMap = [];
  for (let i = 0; i < SIZE; i++) {
    let rowMap = [<tr></tr>];
    for (let j = 0; j < SIZE; j++) {
      rowMap.push(<Square key={`${i},${j}`} gridIndex={[i, j]} />);
    }
    gridMap = [gridMap, ...rowMap];
  }
  return gridMap;
};

const App = () => {
  const alert = useAlert()
  const [playerIndex, setPlayerIndex] = React.useState([0, 0]);
  const [knightIndex, setKnightIndex] = React.useState([1, 2]);
  const [isPlayerTurn, setIsPlayerTurn] = React.useState(true);
  const [currentKnightsPath, setCurrentKnightsPath] = React.useState([]);
  const [playerPoints, setPlayerPoints] = React.useState(110);

  // move knight with delay
  const moveKnight = (path) => {
    path.forEach((eachPathIndex, i) => {
      setTimeout(() => {
        setKnightIndex(eachPathIndex);
        if (_.isEqual(playerIndex, eachPathIndex)) {
          alert.info(Messages.gameOver);
          setPlayerPoints(0);
        }
      }, i * 500);
    });
    setTimeout(() => {
      setCurrentKnightsPath([]);
      setIsPlayerTurn(true);
    }, path.length * 500);
  };

  React.useEffect(() => {
    knightController.setup(Settings.boardSize);
  }, []);

  React.useEffect(() => {
    playComputer();
  }, [isPlayerTurn]);

  const playComputer = () => {
    if (!isPlayerTurn) {
      const allPosibleIndexes = knightController.getPossibleKnight(knightIndex);
      const randomIndex = allPosibleIndexes[Math.floor(Math.random() * allPosibleIndexes.length)];
      const pathForRandomIndex = knightController.getKnigthPath(knightIndex, randomIndex);
      setCurrentKnightsPath([knightIndex, ...pathForRandomIndex]);
      moveKnight([knightIndex, ...pathForRandomIndex]);
    }
  };

  return (
    <>
      <GameContext.Provider value={{
        playerIndex: playerIndex, setPlayerIndex: setPlayerIndex,
        knightIndex: knightIndex,
        isPlayerTurn,
        setIsPlayerTurn,
        currentKnightsPath,
        playerPoints, setPlayerPoints,
      }}>
        <Timer duration={5} completed={() => setIsPlayerTurn(false)}></Timer>
        <div className="content-center">
          <table className="table-matrix" border="1" cellSpacing="0">
            <thead></thead>
            <tbody>
              {generateGrid()}
            </tbody>
          </table>
        </div>
        <Points></Points>
      </GameContext.Provider>
    </>
  );
}

export default App;
