const playerMove = new Audio('/tracks/player_move.mp3');
const knightMove = new Audio('/tracks/knight_move.mp3');
const gameOver = new Audio('/tracks/game_over.mp3');

const playKnigtMove = async () => {
  await knightMove.play();
};

const playPlayerMove = async () => {
  await playerMove.play();
};

const playGameOver = async () => {
  await gameOver.play();
};


module.exports = {
  playKnigtMove,
  playPlayerMove,
  playGameOver,
};