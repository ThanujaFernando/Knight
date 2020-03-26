import React from "react";
import '../App.css';
import { 
  FaChessKnight,
  FaCircle,
  FaRegCircle,
  FaChessKing,
} from 'react-icons/fa';
import GameContext from '../contexts/gameContext';
import isIndexInPath from '../utils/utils';
import _ from 'lodash';

const Square = ({gridIndex}) => {
  const game = React.useContext(GameContext);
  const [hovered, setHovered] = React.useState(false);
  const mouseEnter = () => setHovered(true);
  const mouseLeave = () => setHovered(false);
  
  const isInKnightsPath = () => {
    return (isIndexInPath(game.currentKnightsPath, gridIndex));
  };

  const isValidMove = () => {
    return (
      (Math.abs(gridIndex[0] - game.playerIndex[0]) <=1) && 
      (Math.abs(gridIndex[1] - game.playerIndex[1]) <=1) &&
      (!_.isEqual(gridIndex, game.playerIndex))
    );
  }

  const movePlayer = () => {
    if (isValidMove() && game.isPlayerTurn){
      game.setPlayerIndex(gridIndex);
      game.setIsPlayerTurn(false);
    }
  };  
  
  return (
    <td onClick={ () => movePlayer() } 
        className={`td 
          ${hovered ? isValidMove() ? 'valid-move' : 'invalid-move' : null}
          ${isInKnightsPath() ? 'knight-square': null}
        `}
        id={ gridIndex.toString() }
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
    >
      { _.isEqual(gridIndex, game.playerIndex) ? <FaChessKing size="50"/> : null }
      { _.isEqual(gridIndex, game.knightIndex) ? <FaChessKnight size="50"/> : null }
    </td>
  );
}

export default Square;