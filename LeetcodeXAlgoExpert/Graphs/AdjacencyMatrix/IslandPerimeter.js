/*
You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). Determine the perimeter of the island.

Input:
[
    [0,1,0,0]
    [1,1,1,0]
    [0,1,0,0]
    [1,1,0,0]
]

Output: 16 -> There are 16 sides for each cell of land connected

Time: O(m -> row + n -> cols) | Space: O(1)

Approach
Create our perimeter
Iterate through grid (rows and cols)
    - If the cell is a 1 (land) -> Add 4 to perimeter
        - If cell has a neighboring land cell, remove 2 sides (one from each land cell) which will be touching between these two cells.
        - If current land cell has a UP land cell -> subtract 2 from your accumulated perimeter.
        - If current land cell has a LEFT land cell -> subtract 2 from your accumulated perimeter.
*/

var islandPerimeter = function (grid) {
  let perimeter = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        perimeter += 4;

        if (row > 0 && grid[row - 1][col] === 1) {
          perimeter -= 2;
        }

        if (col > 0 && grid[row][col - 1] === 1) {
          perimeter -= 2;
        }
      }
    }
  }

  return perimeter;
};
