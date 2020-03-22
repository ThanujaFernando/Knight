import React, {useState} from "react";
import '../App.css';
import { 
  FaChessKnight,
  FaCircle,
  FaRegCircle,
  FaChessKing,
} from 'react-icons/fa';

const Square = ({gridIndex}) => {
  const [isPlayer, setIsPlayer] = useState(false);
   
  return (
    <td onClick={()=>setIsPlayer(!isPlayer)} className="td" id={gridIndex}>
      {isPlayer ? <FaChessKing size="10"/> : null}
    </td>
  );
}

export default Square;