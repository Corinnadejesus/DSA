/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Approach
        S  S
    [1, 2, 3]
  S [4, 5, 6]
  S [7, 8, 9]

Swap out diagonal values (2, 4) (3, 7) (6, 8)

After Swap
[1, 4, 7]
[2, 5, 8]
[3, 6, 9]

Time: O(n^2) | Space: O(1)
*/

var rotate = function (matrix) {
  //loop through rows and cols
  for (let row = 0; row < matrix.length; row++) {
    for (let col = row; col < matrix[0].length; col++) {
      //traverse ADJACENT row (1) and column (1)
      [matrix[row][col], matrix[col][row]] = [
        matrix[col][row],
        matrix[row][col],
      ];
    }
  }

  //loop over and reverse the matrix
  for (let row of matrix) {
    row.reverse();
  }
};
