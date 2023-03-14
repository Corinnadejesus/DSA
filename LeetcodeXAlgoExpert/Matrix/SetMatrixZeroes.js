/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place.

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
*/

//Time: O(m * n) | Space: O(m + n)
//Approach: Find 0 and save its row and col position in a set, then loop again and update entire row and col from the set position from 1 to 0.
var setZeroes = function (matrix) {
  let rows = new Set();
  let cols = new Set();
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        rows.add(row);
        cols.add(col);
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (rows.has(row) || cols.has(col)) {
        matrix[row][col] = 0;
      }
    }
  }
};

//Memory Optimized
// Time: O(m * n) | Space: O(1)
var setZeroes = function (matrix) {
  let isFirstRowZero = false;
  let isFirstColZero = false;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      //determine which row/col needs to be 0
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0; //in first column, set row to 0
        matrix[0][col] = 0; //in first row, set col to 0
      }
      //IF ROW AND COL IS ALREADY AT ZERO MARK FIRST ROW AND COL TO TRUE
      if (row === 0 && matrix[row][col] === 0) {
        isFirstRowZero = true;
      }

      if (col === 0 && matrix[row][col] === 0) {
        isFirstColZero = true;
      }
    }
  }
  //ZERO OUT EVERY ROW AND COL EXCEPT THE FIRST HERE
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[row].length; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        //skip first row and col, if first row or col is 0 then set current position to 0
        matrix[row][col] = 0;
      }
    }
  }

  //ZERO OUT FIRST ROW AND FIRST COL HERE
  if (isFirstRowZero) {
    for (let row = 0; row < matrix[0].length; row++) {
      //zero every
      matrix[0][row] = 0;
    }
  }

  if (isFirstColZero) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][0] = 0;
    }
  }
};
