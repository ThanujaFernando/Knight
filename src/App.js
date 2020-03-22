import React from 'react';
import './App.css';
import Square from './components/Square';
import GameContext from './contexts/gameContext';


const generateGrid = () => {
  const SIZE = 4;
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
  const [playerIndex, setPlayerIndex] = React.useState([0,0]);
  const [knightIndex, setKnightIndex] = React.useState([1,3]);
  return (
    <div className="content-center">
    <table className="table-matrix" border="1" cellSpacing="0">
      <thead></thead>
      <tbody>
      <GameContext.Provider value={{
        playerIndex:playerIndex, setPlayerIndex:setPlayerIndex,
        knightIndex:knightIndex,
        }}>
        { generateGrid() }
      </GameContext.Provider>
      </tbody>
    </table>
    </div>
  );
}

export default App;
