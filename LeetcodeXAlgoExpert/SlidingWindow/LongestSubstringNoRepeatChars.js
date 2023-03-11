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

Approach
  - Set left and right pointers
  - Starting from right side over string
    - Populate our map with non-repeating chars
    - Check for repeating chars, if so delete them and move left forward
  - Updating the maximum substring length at every iteration
*/

function lengthOfLongestSubstring(s) {
  let left = 0;
  let max = 0;

  let set = new Set();
  for (let right = 0; right < s.length; right++) {
    //while the set contains repeat chars
    while (set.has(s[right])) {
      //delete the repeating chars from the left and move left forward
      set.delete(s[left]);
      left++
    }

    //otherwise add the letters that are not repeating to set
    set.add(s[right]);

    //One-off error:
    // 0, 1, 2
    // a  b  c
    //right - left + 1 = 3
    max = Math.max(max, right - left + 1);
  }

  return max;
}
