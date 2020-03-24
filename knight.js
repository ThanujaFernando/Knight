//Creating the board squares array

var HorizontalVertical;
const setup = (BoardSize) => {
  // var BoardSize = 4;
  HorizontalVertical = new Array(BoardSize * BoardSize);
  var Index = 0;
  for (var i = 0; i < BoardSize; i++) {
    for (var j = 0; j < BoardSize; j++) {
      HorizontalVertical[Index] = [i, j];
      Index = Index + 1;
    }
  }
};
//lose condition
const isLost = (PawnArray, KnightArray) => {
  if (KnightArray[0] + 2 == PawnArray[0] || KnightArray[0] - 2 == PawnArray[0]) {
    if (KnightArray[1] + 1 == PawnArray[0] || KnightArray[1] - 1 == PawnArray[0]) {
      return true;
    }
  }
  if (KnightArray[0] + 1 == PawnArray[0] || KnightArray[0] - 1 == PawnArray[0]) {
    if (KnightArray[1] + 2 == PawnArray[0] || KnightArray[1] - 2 == PawnArray[0]) {
      return true;
    }
  }

  return false;
};

//getting possible movements for the knight
const getPossibleKnight = (KnightArray) => {
  var ArraySize = 0;
  for (var a = 0; a < HorizontalVertical.length; a++) {
    if (KnightArray[0] + 2 == HorizontalVertical[a][0] || KnightArray[0] - 2 == HorizontalVertical[a][0]) {
      if (KnightArray[1] + 1 == HorizontalVertical[a][1] || KnightArray[1] - 1 == HorizontalVertical[a][1]) {
        ArraySize = ArraySize + 1;
      }
    }

  }

  var PossibleKnight = new Array(ArraySize);
  var PossibleKnightIndex = 0;
  for (var a = 0; a < HorizontalVertical.length; a++) {
    if (KnightArray[0] + 2 == HorizontalVertical[a][0] || KnightArray[0] - 2 == HorizontalVertical[a][0]) {
      if (KnightArray[1] + 1 == HorizontalVertical[a][1] || KnightArray[1] - 1 == HorizontalVertical[a][1]) {
        PossibleKnight[PossibleKnightIndex] = [HorizontalVertical[a][0], HorizontalVertical[a][1]];
        PossibleKnightIndex = PossibleKnightIndex + 1;
      }
    }
    if (KnightArray[0] + 1 == HorizontalVertical[a][0] || KnightArray[0] - 1 == HorizontalVertical[a][0]) {
      if (KnightArray[1] + 2 == HorizontalVertical[a][1] || KnightArray[1] - 2 == HorizontalVertical[a][1]) {
        PossibleKnight[PossibleKnightIndex] = [HorizontalVertical[a][0], HorizontalVertical[a][1]];
        PossibleKnightIndex = PossibleKnightIndex + 1;
      }
    }

  }
  return PossibleKnight;
};

// PossibleKnight.forEach(element => {
//   console.log(element);
// });


// //giving a new position for the knight
// KnightArray = PossibleKnight[Math.floor(Math.random() * PossibleKnight.length)]
// var fKnight =toString(KnightArray);
// console.log(fKnight);

// module.exports = {
//   setup,
//   getPossibleKnight,
//   getLose,
// };

setup(4);
const dd = getPossibleKnight([0,1]);
dd.forEach(element => {
  console.log(element)
});