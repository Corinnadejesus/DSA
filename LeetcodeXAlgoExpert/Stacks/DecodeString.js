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
        - Populate Stack
        - Get all the chars before ] from stack
            - while chars are not [
                - Add letter and number chars to decode string
        - While the top of stack has a number
            - Remove the number from the stack
        - Build to decoded string with as many letters as the number
        - Add the decoded string back onto the stack backwards
    - Return the joined stack items

*/

var decodeString = function (s) {
  if (!s || !isNaN(s)) return "";

  const stack = [];
  let decodedStr = "";

  for (const char of s) {
    if (char === "]") {
      while (stack[stack.length - 1] !== "[") {
        //add top items into stack as long as it is not [
        decodedStr += stack.pop();
      }

      stack.pop(); // pop off the open bracket

      let k = "";
      // While the character at the top of the stack is a number...
      while (!isNaN(stack[stack.length - 1])) {
        k = stack.pop() + k;
      }

      // Build our decoded string using the repeat method. And convert K into a number
      decodedStr = decodedStr.repeat(Number(k));

      // Push decoded string back onto the stack
      for (let i = decodedStr.length - 1; i >= 0; i--) {
        stack.push(decodedStr[i]);
      }
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};
