/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

var numIslands = function (grid) {
  let islandCounter = 0;

  function dfs(grid, i, j) {
    //if the element (i or j) is ABOVE (OR) BELOW the bounds of the grid O(R) if the element we are on is a 0, we want 1s
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[i].length ||
      grid[i][j] == "0"
    ) {
      return;
    }

    //change the element we are on from a 1 to a 0
    grid[i][j] = "0";

    //checking if any of the elements surrounding siblings are a 1
    dfs(grid, i + 1, j); // down
    dfs(grid, i - 1, j); // up
    dfs(grid, i, j + 1); // right
    dfs(grid, i, j - 1); // left
  }

  //if there are any elements that are a 1, we have a valid island so increase the counter
  //and recursively call the search on the rest of the neighbors
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == "1") {
        islandCounter += 1;
        dfs(grid, i, j);
      }
    }
  }

  return islandCounter;
};
