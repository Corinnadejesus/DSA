/*
Given a string, find the length of the longest substring T that contains at most 2 distinct characters.

Example 1:
Input: “eceba”
Output: 3
Explanation:
T is "ece" which its length is 3.

Example 2:
Input: “aaa”
Output: 3

Time: O(n) | Space: O(1)

Approach
    - Loop over str
        - While the char has been seen more than twice decrement the value in map
        - If the char value is at 0 in map, delete it and advance left
    - Calculate curr length by indices of right and left and return the max length
*/

function twoDistinctCharacters(string) {
  let map = {};
  let maxLength = 0;
  let currLength = 0;
  let left = 0;
  for (let right = 0; right < string.length; right++) {
    let char = string[right];
    map[char] = (map[char] || 1) + 1;

    while (Object.keys(map).length > 2) {
      map[string[left]]--;
      if (map[string[left]] === 0) {
        delete map[string[left]];
      }
      left++;
    }

    currLength = right - left + 1;
    maxLength = Math.max(currLength, maxLength);
  }

  return maxLength;
}
