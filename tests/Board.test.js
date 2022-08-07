import Board from '../modules/Board';

let board;
beforeEach(() => {
  board = Board();
});

describe('Board', () => {
  it('Constructor', () => {
    const board4 = Board(4);

    expect(board.visited[0].length).toBe(8);
    expect(board.visited.length).toBe(8);
    expect(board4.visited[0].length).toBe(4);
    expect(board4.visited.length).toBe(4);
  });

  it('isValidCoord', () => {
    expect(board.isValidCoord(0, 0)).toBe(true);
    expect(board.isValidCoord(7, 7)).toBe(true);
    expect(board.isValidCoord(-1, 0)).toBe(false);
    expect(board.isValidCoord(0, -1)).toBe(false);
    expect(board.isValidCoord(8, 0)).toBe(false);
    expect(board.isValidCoord(0, 8)).toBe(false);
  });

  it('getPossiblePath', () => {
    // use sort() to ignore order
    expect(board.getPossiblePath(0, 0).sort()).toEqual([[1, 2], [2, 1]].sort());
    expect(board.getPossiblePath(3, 3).sort()).toEqual([[4, 5], [4, 1], [2, 5], [2, 1], [5, 4], [5, 2], [1, 4], [1, 2]].sort());
  })
});