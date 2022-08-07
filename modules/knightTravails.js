import Board from './Board.js';

const knightTravails = (start, end) => {
  const board = Board();
  if (!board.isValidCoord(start[0], start[1]) || !board.isValidCoord(end[0], end[1])) {
    throw new Error('Invalid start/end coord');
  }

  // find path
  let queue = [start];
  while (queue.length !== 0) {
    const curCoord = queue.shift();
    if (curCoord[0] === end[0] && curCoord[1] === end[1]) {
      break;
    }

    const nextCoords = board.getPossiblePath(curCoord[0], curCoord[1]);
    nextCoords.forEach((coord) => {
      if (board.visited[coord[0]][coord[1]]) {
        return;
      }
      queue.push(coord);
      board.visited[coord[0]][coord[1]] = true;
      board.lastCoord[coord[0]][coord[1]] = [curCoord[0], curCoord[1]];
    });
  }

  // backtrace path
  const path = [];
  let curCoord = end;
  while (curCoord[0] !== start[0] || curCoord[1] !== start[1]) {
    path.unshift(curCoord);
    curCoord = board.lastCoord[curCoord[0]][curCoord[1]];
  }
  path.unshift(start);

  // output
  console.log(` => You made it in ${path.length} moves!  Here's your path:`);
  path.forEach(coord => console.log(coord));
  return path;
}

export default knightTravails;
