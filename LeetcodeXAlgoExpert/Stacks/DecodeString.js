/*
Given an encoded string, return its decoded string.
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Time: O(n) | Space: O(n)

Approach
  - Iterate over s
    - For ]
      - Populate Stack with Letters and Numbers before open bracket
      - Pop off open bracket
      - Get the number in the stack
      - Build our decoded string by repeating k times
      - Iterate over decoded string pushing it back into stack
    - Otherwise push all other chars into stack
  - Return stack joined into a string

KEY:
  - POPULATE STACK, REMOVE UNWANTED BRACKETS
  - GET K NUMBER FROM STACK
  - BUILD DECODED STRING WITH K REPEATED
  - PUSH DECODED STRING BACK INTO STACK
  - TURN STACK INTO STRING
*/

var decodeString = function (s) {
  if (!s || !isNaN(s)) return "";

  const stack = [];

  for (const char of s) {
    if (char === "]") {
      let decodedStr = "";

      // Grab all characters before open bracket
      while (stack[stack.length - 1] !== "[") {
        // We do it this way so the string can be in order
        decodedStr = stack.pop() + decodedStr;
      }

      // Pop off the open bracket
      stack.pop();

      let k = "";

      // While our stack has a length, and the character we're at is a number...
      while (!isNaN(stack[stack.length - 1])) {
        k = stack.pop() + k;
      }

      // Use the repeat method based on the number we grabbed
      decodedStr = decodedStr.repeat(Number(k));

      // Push each char of our newly generated string to store it in our stack.
      for (const str of decodedStr) {
        stack.push(str);
      }
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};
