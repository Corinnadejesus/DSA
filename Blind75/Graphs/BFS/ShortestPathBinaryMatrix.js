/*
Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.
A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
All the visited cells of the path are 0.
All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
The length of a clear path is the number of visited cells of this path.

Time: O(n) | Space: O(n)
*/

var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] === 1) return -1;

  //Step 1: Create the directions we will travel in matrix and create queue with the starting points and path count
  let directions = [
    [1, 0],  //left
    [-1, 0], //right
    [0, 1],  //up
    [0, -1], //down
    
    //Diagonal Directions
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  let queue = [[0, 0, 1]];
  while (queue.length) {
    let [currX, currY, pathCount] = queue.shift();

    //Step 2: Check if we are at the bottom right position of the matrix to see if we have completed traversal
    if (currX === grid.length - 1 && currY === grid[0].length - 1)
      return pathCount;

    //Step 3: Extract our next coordinates and check if they are out of bounds (up, down, left, right)
    for (let [dirX, dirY] of directions) {
      let nextX = currX + dirX;
      let nextY = currY + dirY;

      if (
        nextX < 0 ||
        nextX > grid.length - 1 ||
        nextY < 0 ||
        nextY > grid[0].length - 1 ||
        grid[nextX][nextY] === 1
      )
        continue;

      //Step 4: The position we are on is now 0, we want to push the coordinates into the queue and add to the path count
      queue.push([nextX, nextY, pathCount + 1]);

      //Step 5: Update coordinates and mark as visited to prevent repeated calculations
      grid[nextX][nextY] = 1;
    }
  }
  return -1;
};
