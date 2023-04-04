/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".

Example 2:
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

Time: O(n^3) | Space: O(n)

Approach - BFS
    - Check every subsequence in s to see if its in the wordSet
    - If subseq is in wordSet and there's no other chars to consider in s return true
    - Otherwise push the index into the queue to have a new starting point and mark the previous index as visited to avoid visiting duplicate values
*/

var wordBreak = function (s, wordDict) {
  let queue = [0];
  let visited = new Set();
  let wordSet = new Set(wordDict);

  while (queue.length) {
    let currIdx = queue.shift();

    if (!visited.has(currIdx)) {
      for (let i = currIdx + 1; i <= s.length; i++) {
        let word = s.slice(currIdx, i);
        if (wordSet.has(word)) {
          if (i === s.length) {
            return true;
          }

          queue.push(i);
        }
      }

      visited.add(currIdx);
    }
  }

  return false;
};
