/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
*/

//Iteration
//Time: O(n) | Space: O(1)
var lengthOfLastWord = function (s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (count > 0) {
        return count;
      } else {
        continue;
      }
    }

    count++;
  }
  return count;
};

//Built-in Methods
//Trim
//Time: O(n) | Space: O(n) -> creation of new array of input size
var lengthOfLastWord = function (s) {
    s = s.trim().split(' ')
    return s[s.length - 1].length
}

//Reg Ex.
//Time: O(n) | Space: O(n)
var lengthOfLastWord = function (s) {
    s = s.replace(/^\s+|\s+$/gm,'').split(' ')
    return s[s.length - 1].length
}
