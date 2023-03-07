/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false


Time: O(n * 3L) | Space: O(L)
    n -> number cell in board
    L -> We traverse in 3 direction for as long as the word LENGTH

Brute-Force Backtracking w/ DFS Recursion
We have to look in directions up, left, down, right but ensure we don't revisit the same char twice
    - Iterate through the board
        if after we visited each cell, the chars of the board are present in the word -> true
    - Init DFS Helper Function
        - Base Case: if we found every letter of the word in board -> true
        - Check if Above or Below Bound or board char is not in word -> false
        - Mark cell as visited to prevent revisiting
        - Call DFS on each direction returning true
        - Reset the board char from # to original letter
    - Otherwise board chars are not present in word -> return false
*/

var exist = function (board, word) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      let char = board[row][col];
      if (char === word[0] && dfs(row, col, 0)) {
        return true;
      }
    }
  }

  function dfs(row, col, index) {
    if (word.length === index) return true;

    if (
      row >= board.length ||
      row < 0 ||
      col < 0 ||
      col >= board[row].length ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    board[row][col] = "#";

    if (
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1)
    )
      return true;

    board[row][col] = word[index];
  }

  return false;
};
