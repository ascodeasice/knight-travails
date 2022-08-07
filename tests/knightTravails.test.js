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
    expect(knightTravails([3, 3], [0, 0])).toEqual([[3, 3], [2, 1], [0, 0]]);
  });

  it('Shortest path 4', () => {
    expect(knightTravails([0, 0], [4, 5])).toEqual([[0, 0], [1, 2], [2, 4], [4, 5]]);
  });

  it('Shortest path 5', () => {
    expect(knightTravails([3, 3], [4, 3]).length).toBe(4);
  });
});