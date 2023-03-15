/*
Given an m x n matrix, return all elements of the matrix in spiral order.
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Time: O(m * n) | Space: O(1)

Approach
- Initialize four boundaries (left, right, top, bottom)
- Iterate the first row of remaining rows & increase top boundary by 1.
    - Iterate the last column of remaining columns & decrease left boundary by 1.
    - Iterate the last row of remaining rows & decrease bottom boundary by 1.
    - Iterate the first column of remaining columns & increase left boundary by 1.
Repeat steps 2-5 till (left,right) boundaries crosses each other and (top,bottom) boundaries crosses each other.
*/

var spiralOrder = function (matrix) {
  let results = [];
  let rows = matrix.length;
  let cols = matrix[0].length;

  //BOUNDARIES
  let left = 0;
  let right = cols - 1;
  let top = 0;
  let bottom = rows - 1;

  // TOP LEFT TO RIGHT ROW
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      results.push(matrix[top][i]);
    }
    top++;

    // TOP RIGHT TO BOTTOM COL
    for (let i = top; i <= bottom; i++) {
      results.push(matrix[i][right]);
    }
    right--;

    // BOTTOM RIGHT TO LEFT ROW
    for (let i = right; i >= left && top <= bottom; i--) {
      results.push(matrix[bottom][i]);
    }
    bottom--;

    // BOTTOM LEFT TO TOP COL
    for (let i = bottom; i >= top && left <= right; i--) {
      results.push(matrix[i][left]);
    }
    left++;
  }

  return results;
};
