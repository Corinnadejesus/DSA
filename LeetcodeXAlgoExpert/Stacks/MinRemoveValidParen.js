/*
Given a string s of '(' , ')' and lowercase English characters.
Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:
    - It is the empty string, contains only lowercase characters, or
    - It can be written as AB (A concatenated with B), where A and B are valid strings, or
    - It can be written as (A), where A is a valid string.

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

Time: O(n) | Space: O(n)
Approach
Set a stack
Set a result string
Split our input s into an array
Iterate through s
    - If ele is '('
        - Add its index to the stack
    - Else ele is ')'
        - Remove the index of '(' from the stack by setting it to an empty string
Remove the extra bracket in our stack by setting it to an empty string
*/

var minRemoveToMakeValid = function (s) {
  let stack = [];
  let splitStr = s.split("");
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(") {
      stack.push(i);
    } else if (char === ")") {
      if (stack.length === 0) {
        splitStr[i] = "";
      } else {
        stack.pop();
      }
    }
  }

  for (let i = 0; i < stack.length; i++) {
    const index = stack[i];
    splitStr[index] = "";
  }

  return splitStr.join("");
};
