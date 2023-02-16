/*
Given a string that consists of brackets, write a function bracketMatch that takes a bracket string as an input and returns the minimum number of brackets you’d need to add to the input in order to make it correctly matched -> ().

Example:
Input: “(())()”
Output: 2

Time: O(n) | Space: O(1)
*/

function bracketMatch(text) {
  let stack = [];
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == "(") {
      stack.push(text[i]);
    } else {
      if (stack.length === 0) {
        count++;
      }

      stack.pop();
    }
  }

  return count + stack.length;
}
