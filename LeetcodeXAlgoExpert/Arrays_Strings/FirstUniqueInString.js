/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2
*/

var firstUniqChar = function (s) {
  //Time: O(n) | Space: O(1) -> Because there are only 26 letters the s could be

  let freqMap = {};

  //iterate over string
  for (let char of s) {
    // map of the frequency of the letters
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  //the first value equal to 1 is non-repeating so return index of the value
  for (let i = 0; i < s.length; i++) {
    if (freqMap[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};

//////////////////**************** ALTERNATIVE **************////////////////////



//Time: O(n) | Space: 0(1)
var firstUniqChar = function (s) {
  for (i = 0; i < s.length; i++)
    //the index will be at the same number if the values only occur once
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  return -1;
};
