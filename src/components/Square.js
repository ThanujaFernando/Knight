import React from "react";
import '../App.css';
import { 
  FaChessKnight,
  FaCircle,
  FaRegCircle,
  FaChessKing,
} from 'react-icons/fa';
import GameContext from '../contexts/gameContext';

const Square = ({gridIndex}) => {
  const game = React.useContext(GameContext);
  const [hovered, setHovered] = React.useState(false);
  const toggleHover = () => setHovered(!hovered);
  
  const isValidMove = () => {
    return (
      (Math.abs(gridIndex[0] - game.playerIndex[0]) <=1) && 
      (Math.abs(gridIndex[1] - game.playerIndex[1]) <=1)
    );
  }

  const movePlayer = () => {
    if (isValidMove()){
      game.setPlayerIndex(gridIndex);
    }
  };  
  
  return (
    <td onClick={ () => movePlayer() } 
        className={`td ${hovered ? isValidMove()  ? 'valid-move' : 'invalid-move' : ''}`}
        id={ gridIndex.toString() }
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
    >
      { gridIndex.toString() === game.playerIndex.toString() ? <FaChessKing size="10"/> : null }
    </td>
  );
}

export default Square;