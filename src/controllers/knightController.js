var HorizontalVertical;

//Creating the board squares array
const setup = (BoardSize) => {
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

//Knight path
const getKnigthPath = (KnightOld, KnightNew) => {

  var TKnight = KnightOld;
  var HorizontalSign = 1;
  var VerticalSign = 1;
  var PathArray = new Array(3);
  var PathArrayIndex = 0;
  var HDifference = KnightNew[1] - KnightOld[1];
  var VDifference = KnightNew[0] - KnightOld[0];
  if (HDifference < 0) {
    HorizontalSign = HorizontalSign * (-1);
    HDifference = HDifference * (-1);
  }
  if (VDifference < 0) {
    VerticalSign = VerticalSign * (-1);
    VDifference = VDifference * (-1);
  }
  for (var i = 0; i < HDifference; i++) {

    PathArray[PathArrayIndex] = [TKnight[0], TKnight[1] + (HorizontalSign)];
    TKnight = PathArray[PathArrayIndex];
    PathArrayIndex = PathArrayIndex + 1;
  }
  for (var j = 0; j < VDifference; j++) {

    PathArray[PathArrayIndex] = [TKnight[0] + (VerticalSign), TKnight[1]];
    TKnight = PathArray[PathArrayIndex];
    PathArrayIndex = PathArrayIndex + 1;
  }
  return PathArray;
}

module.exports = {
  setup,
  getPossibleKnight,
  isLost,
  getKnigthPath,
};
