const playerMove = new Audio('/tracks/player_move.mp3');
const knightMove = new Audio('/tracks/knight_move.mp3');
const gameOver = new Audio('/tracks/game_over.mp3');

const playFunctions = {
  playKnigtMove: async () => {
    await knightMove.play();
  },

  playPlayerMove: async () => {
    await playerMove.play();
  },

  playGameOver: async () => {
    await gameOver.play();
  },
};

export default playFunctions;