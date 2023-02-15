/*
A string of brackets is considered correctly matched if every opening bracket in the string can be paired up with a later closing bracket, and vice versa. For instance, “(())()” is correctly matched, whereas “)(“ and “((” aren’t. For instance, “((” could become correctly matched by adding two closing brackets at the end, so you’d return 2.

Given a string that consists of brackets, write a function bracketMatch that takes a bracket string as an input and returns the minimum number of brackets you’d need to add to the input in order to make it correctly matched.

Time: O(n) | Space: O(1)
*/

function bracketMatch(text) {
  let firstStack = [];
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == "(") {
      firstStack.push(text[i]);
    } else {
      if (firstStack.length === 0) {
        count++;
      }

      firstStack.pop();
    }
  }

  return count + firstStack.length;
}
