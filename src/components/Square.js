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
import soundsLibrary from '../utils/soundsLibrary';
import isMobile from '../utils/isMobile';

const Square = ({gridIndex}) => {
  const game = React.useContext(GameContext);
  const [hovered, setHovered] = React.useState(false);
  const mouseEnter = () => {
    if (!isMobile()) setHovered(true);
  };
  const mouseLeave = () => {
    if (!isMobile()) setHovered(false);
  };
  
  const isInKnightsPath = () => {
    return (isIndexInPath(game.currentKnightsPath, gridIndex));
  };

  const isValidMove = () => {
    return (
      (Math.abs(gridIndex[0] - game.playerIndex[0]) <=1) && 
      (Math.abs(gridIndex[1] - game.playerIndex[1]) <=1) &&
      (!_.isEqual(gridIndex, game.playerIndex)) && 
      game.isPlayerTurn
    );
  }

  const movePlayer = () => {
    if (isValidMove()){
      game.setPlayerIndex(gridIndex);
      game.setIsPlayerTurn(false);
      game.setPlayerPoints(game.playerPoints + 10);
      soundsLibrary.playPlayerMove();
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