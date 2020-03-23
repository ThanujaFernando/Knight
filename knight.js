//Creating the board squares array
var BoardSize = 4;
var HorizontalVertical = new Array(BoardSize*BoardSize); 
var Index = 0;
for (var i = 0; i < BoardSize; i++) { 
    for(var j = 0; j<BoardSize;j++){
        HorizontalVertical[Index]=[i+1,j+1];
        Index=Index+1; 
    }
}
//lose condition
var PawnArray = [5,6];
var KnightArray = [1,2];
if  (KnightArray[0]+2==PawnArray[0]||KnightArray[0]-2==PawnArray[0])
{
    if(KnightArray[1]+1==PawnArray[0]||KnightArray[1]-1==PawnArray[0]){
        document.write("lose");
    }
}
if  (KnightArray[0]+1==PawnArray[0]||KnightArray[0]-1==PawnArray[0])
{
    if(KnightArray[1]+2==PawnArray[0]||KnightArray[1]-2==PawnArray[0]){
        document.write("lose");
    }
}
//getting possible movements for the knight
var ArraySize = 0;
for (var a = 0; a<HorizontalVertical.length; a++){
    if(KnightArray[0]+2==HorizontalVertical[a][0]||KnightArray[0]-2==HorizontalVertical[a][0]){
        if(KnightArray[1]+1==HorizontalVertical[a][1]||KnightArray[1]-1==HorizontalVertical[a][1]){
            ArraySize = ArraySize+1;
        }
    }

}

var PossibleKnight = new Array(ArraySize);
var PossibleKnightIndex = 0;
for (var a = 0; a<HorizontalVertical.length; a++){
    if(KnightArray[0]+2==HorizontalVertical[a][0]||KnightArray[0]-2==HorizontalVertical[a][0]){
        if(KnightArray[1]+1==HorizontalVertical[a][1]||KnightArray[1]-1==HorizontalVertical[a][1]){
            PossibleKnight[PossibleKnightIndex]=[HorizontalVertical[a][0],HorizontalVertical[a][1]];
        }
    }

}
//giving a new position for the knight
KnightArray = PossibleKnight[Math.floor(Math.random() * PossibleKnight.length)]