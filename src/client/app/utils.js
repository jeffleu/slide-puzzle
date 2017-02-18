export const createBoard = () =>{ 
  let board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
  return placeNumbers(board);
};

const placeNumbers = (board) => {
  const allCoordinates = [];
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      allCoordinates.push([r, c]);
    }
  }
  
  const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  numbers.forEach(n => {
    const randomIndex = Math.floor(Math.random() * allCoordinates.length);
    const randomCoordinate = allCoordinates.splice(randomIndex, 1);
    board[randomCoordinate[0][0]][randomCoordinate[0][1]] = n;
  });
  
  return board;
};

export const checkForCompletion = (board) => {
  const finishedBoard = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];
  return JSON.stringify(finishedBoard) === JSON.stringify(board);
};

export const playSound = (sound) => {
  if (sound === 'click') {
    const click = document.querySelector('#clickSound');
    click.play();
  }
};
