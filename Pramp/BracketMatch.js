/*
Given a string that consists of brackets, write a function bracketMatch that takes a bracket string as an input and returns the minimum number of brackets you’d need to add to the input in order to make it correctly matched -> ().

Input: “(())()”
Output: 2

Input: s = "())"
Output: 1

Time: O(n) | Space: O(1)
*/

var minAddToMakeValid = function(s) {
  let countOpen = 0
  let countClosed = 0
  for(const char of s) {
      if(char === '(') {
          countOpen++
      } else if(countOpen > 0) {
          countOpen--
      } else {
          countClosed++
      }
  }
  return countOpen + countClosed
};
