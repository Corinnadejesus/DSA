/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".

Time: O(n^3) | Space: O(n)
*/

var wordBreak = function (s, wordDict, memo = {}) {
  if (!s.length) return true;

  if (s in memo) return memo[s];

  for (let word of wordDict) {
    if (s.startsWith(word)) {
      if (wordBreak(s.slice(word.length), wordDict, memo)) return true;
    }
  }
  return (memo[s] = false);
};
