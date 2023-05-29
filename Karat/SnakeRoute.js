/*
We have a two-dimensional board game involving snakes.  The board has two types of squares on it: +'s represent impassable squares where snakes cannot go, and 0's represent squares through which snakes can move.  Snakes can only enter on the edges of the board, and each snake can move in only one direction.  We'd like to find the places where a snake can pass through the entire board, moving in a straight line.

Here is an example board:

    col-->        0  1  2  3  4  5  6
               +----------------------
    row      0 |  +  +  +  0  +  0  0
     |       1 |  0  0  +  0  0  0  0
     |       2 |  0  0  0  0  +  0  0
     v       3 |  +  +  +  0  0  +  0
             4 |  0  0  0  0  0  0  0

Write a function that takes a rectangular board with only +'s and 0's, and returns two collections:

* one containing all of the row numbers whose row is completely passable by snakes, and
* the other containing all of the column numbers where the column is completely passable by snakes.

Approach
  - Iterate through rows and cols
    - for every continuous 0 in row and col add indices to map
*/
let board1 = [
  ["+", "+", "+", "0", "+", "0", "0"],
  ["0", "0", "+", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "+", "0", "0"],
  ["+", "+", "+", "0", "0", "+", "0"],
  ["0", "0", "0", "0", "0", "0", "0"],
];

let board2 = [
  ["+", "+", "+", "0", "+", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "+", "+", "0", "+", "0"],
  ["0", "0", "0", "0", "+", "0", "0"],
  ["+", "+", "+", "0", "0", "0", "+"],
];

let board3 = [["+"]];

let board4 = [["0"]];

//Time: O(n * m) | Space: O(n)
function findPassableLanes(grid) {
  let map = {
    rows: [],
    cols: [],
  };

  for (let row = 0; row < grid.length; row++) {
    let rowPass = grid[row].every((cell) => cell === "0");
    if (rowPass) map["rows"].push(row);
  }

  for (let col = 0; col < grid[0].length; col++) {
    let colPass = grid.every((cell) => cell[col] === "0");
    if (colPass) map["cols"].push(col);
  }

  return map;
}

console.log(findPassableLanes(board1));
console.log(findPassableLanes(board2));
console.log(findPassableLanes(board3));
console.log(findPassableLanes(board4));
