/*
A string is good if there are no repeated characters.
Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
A substring is a contiguous sequence of characters in a string.

Example 1:
Input: s = "xyzzaz"
Output: 1
Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz".
The only good substring of length 3 is "xyz".

Example 2:
Input: s = "aababcabc"
Output: 4
Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
The good substrings are "abc", "bca", "cab", and "abc".

Time: O(n) | Space: O(1) -> Set is at most 3 characters
*/

var countGoodSubstrings = function (s) {
  let left = 0;
  let totalSubstr = 0;
  const set = new Set();

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      //delete ALL left chars until duplicate has been removed
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);

    if (set.size === 3) {
      //good substr has been found, delete left char to decrease size of set and check for other substr
      totalSubstr++;
      set.delete(s[left]);
      left++;
    }
  }

  return totalSubstr;
};
