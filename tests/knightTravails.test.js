import knightTravails from "../modules/knightTravails";

describe('knightTravails', () => {
  it('Invalid coords', () => {
    expect(() => knightTravails([-1, 0], [0, 0])).toThrow();
    expect(() => knightTravails([0, -1], [0, 0])).toThrow();
    expect(() => knightTravails([8, 0], [0, 0])).toThrow();
    expect(() => knightTravails([0, 8], [0, 0])).toThrow();
    expect(() => knightTravails([0, 0], [-1, 0])).toThrow();
    expect(() => knightTravails([0, 0], [8, 0])).toThrow();
    expect(() => knightTravails([0, 0], [0, 8])).toThrow();
    expect(() => knightTravails([0, 0], [0, -1])).toThrow();
  });

  it('Shortest path 1', () => {
    expect(knightTravails([0, 0], [1, 2])).toEqual([[0, 0], [1, 2]]);
  });

  it('Shortest path 2', () => {
    expect(knightTravails([0, 0], [3, 3])).toEqual([[0, 0], [1, 2], [3, 3]]);
  });

  it('Shortest path 3', () => {
    expect(knightTravails([3, 3], [0, 0])).toEqual([[3, 3], [1, 2], [0, 0]]);
  });
});