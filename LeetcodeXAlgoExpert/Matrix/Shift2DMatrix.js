/*
Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

In one shift operation:

Element at grid[i][j] moves to grid[i][j + 1].
Element at grid[i][n - 1] moves to grid[i + 1][0].
Element at grid[m - 1][n - 1] moves to grid[0][0].
Return the 2D grid after applying shift operation k times
*/
//Time: O(n * m * k) | Space: O(n * m)
var shiftGrid = function (grid, k) {
  for (let i = 0; i < k; i++) {
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
        swap(grid, 0, 0, r, c);
      }
    }
  }
  return grid;
};

function swap(grid, tr, tc, dr, dc) {
  let temp = grid[tr][tc];
  grid[tr][tc] = grid[dr][dc];
  grid[dr][dc] = temp;
}

//////////////////************* ALTERNATIVE ***********////////////////

// The element at the end of each row is popped off and unshifted to the beginning of the next. The last row wraps around to the first row with the modulo.
//Time: O(n * m) | Space: O(n * m)
var shiftGrid = function (grid, k) {
  let m = grid.length;

  for (let j = 0; j < k; j++) {
    for (let i = 0; i < m; i++) {
      grid[i].unshift(grid[(m + i - 1) % m].pop());
    }
  }
  return grid;
};
