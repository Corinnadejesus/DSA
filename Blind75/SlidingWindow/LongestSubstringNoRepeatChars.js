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
    let begin = 0
    let max = 0

    let set = new Set()
    for (let end = 0; end < s.length; end++) {
        //while the set contains repeat chars
        while (set.has(s[end])) {
            //delete the repeating chars from the beginning*
            set.delete(s[begin])
            //update the beginning by starting at the value after the repeating char
            begin = begin + 1
        }

        //otherwise add the letters that are not repeating
        set.add(s[end])

        //get the max the same way
         max = Math.max(max, end - begin + 1)
    }

    return max
}