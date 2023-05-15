// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

//Time | Space: O(n)
/*
Approach
Stack keeps track of opening brackets
Loop through s
    - If closing bracket KEY exist in map
        - If stack is not empty pop top element from stack
        - If opening bracket VALUE map is not same as top of stack => false
    - Else add char to stack
*/

var isValid = function (s) {
  let stack = [];
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char in map) { //key
      let item = stack.pop();
      if (item !== map[char]) { //value
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
