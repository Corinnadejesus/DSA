/*
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
Return the sorted string. If there are multiple answers, return any of them.

Time: O(n log n) | Space: O(n))

Approach
    - Loop over s, Record chars and freq in map
    - Sort the keys in map by their highest values
    - Loop over keys
        - Repeat key as many times as its mapped value
        - Push output into res array
    - Return joined res
*/

var frequencySort = function (s) {
  let res = [];
  let map = {};
  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  let keys = Object.keys(map).sort((a, b) => map[b] - map[a]); //['e','t','r' ]

  for (let key of keys) {
    res.push(key.repeat(map[key]));
  }

  return res.join("");
};
