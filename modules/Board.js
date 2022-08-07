const Board = (size = 8) => {
  // 2d array to 
  let visited = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(false);
    }
    visited.push(row);
  }

  const isValidCoord = (row, col) => {
    return row >= 0 && row < size && col >= 0 && col < size;
  }

  const getPossiblePath = (row, col) => {
    const directions = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
    return (directions.map(coord => [row + coord[0], col + coord[1]])
      .filter(coord => isValidCoord(coord[0], coord[1]))
    );
  }

  return { visited, isValidCoord, getPossiblePath };
}

export default Board;