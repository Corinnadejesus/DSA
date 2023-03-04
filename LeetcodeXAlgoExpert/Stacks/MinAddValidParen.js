/*
A parentheses string is valid if and only if:

It is the empty string,
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
Return the minimum number of moves required to make s valid.

Input: s = "())"
Output: 1

Input: s = "((("
Output: 3

Time: O(n) | Space: O(1)
*/

var minAddToMakeValid = function (s) {
  let countOpen = 0;
  let countClosed = 0;
  for (const char of s) {
    if (char === "(") {
      countOpen++;
    } else if (countOpen > 0) {
      countOpen--;
    } else {
      countClosed++;
    }
  }
  return countOpen + countClosed;
};
