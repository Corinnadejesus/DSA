/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Time: O(n) | Space: O(1)
*/

function lengthOfLongestSubstring(s) {
  let begin = 0;
  let max = 0;

  let set = new Set();
  for (let end = 0; end < s.length; end++) {
    //while the set contains repeat chars
    while (set.has(s[end])) {
      //delete the repeating chars from the beginning
      set.delete(s[begin]);
      //update the beginning by starting at the value after the repeating char
      begin = begin + 1;
    }

    //otherwise add the letters that are not repeating
    set.add(s[end]);

    //One-off error:
    //the difference in (end, begin) gets one Index, add one to get the next non-repeat char.
    max = Math.max(max, end - begin + 1);
  }

  return max;
}

//**************** ALTERNATE w/ Map ***************************/

function lengthOfLongestSubstring(s) {
  let begin = 0;
  let max = 0;
  let map = {};

  //iterate over string
  for (let end = 0; end < s.length; end++) {
    //if ele is repeating in map and if it is located after the beginning of the string
    if (map[s[end]] !== undefined && map[s[end]] >= begin) {
      //update the beginning point to remove that repeating char from the map
      begin = map[s[end]] + 1;
    }
    //otherwise set the value as that char as its been seen
    map[s[end]] = end;

    //update the max value as the difference between the beginning and the end + 1 to get the second value
    max = Math.max(max, end - begin + 1);
  }

  return max;
}
