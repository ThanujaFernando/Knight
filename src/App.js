import React from 'react';
import './App.css';
import Square from './components/Square';
import GameContext from './contexts/gameContext';
import knightController from './controllers/knightController';
import { useAlert } from 'react-alert'
import Messages from './gameSettings/messages';
import Settings from './gameSettings/settings';

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

  // placeholder for knight's movements...
  const moveKnight = (path) => {
    path = [[0,1],[0,2],[0,3]];
    path.forEach((eachPathIndex, i) => {
      setTimeout(() => {
        setKnightIndex(eachPathIndex);
      }, i * 1000);
    });
  };
  React.useEffect(() => {
    knightController.setup(Settings.boardSize);
  }, []);

  React.useEffect(() => {
    playComputer();
  }, [isPlayerTurn]);

  const playComputer = () => {
    if (!isPlayerTurn){
      const allPossiblePaths = knightController.getPossibleKnight(knightIndex);
      const randomPath = allPossiblePaths[Math.floor(Math.random() * allPossiblePaths.length)]
      setKnightIndex(randomPath);
      if (knightController.isLost(playerIndex, knightIndex)){
        alert.error(Messages.gameOver);
      }
      setIsPlayerTurn(true);
    }
  };

  return (
    <div className="content-center">
    <table className="table-matrix" border="1" cellSpacing="0">
      <thead></thead>
      <tbody>
      <GameContext.Provider value={{
        playerIndex:playerIndex, setPlayerIndex:setPlayerIndex,
        knightIndex:knightIndex,
        isPlayerTurn,
        setIsPlayerTurn,
        }}>
        { generateGrid() }
      </GameContext.Provider>
      </tbody>
    </table>
    </div>
  );
}

export default App;
