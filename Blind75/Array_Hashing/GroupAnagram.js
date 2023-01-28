/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Time: O(n) | Space: O(n)
*/

var groupAnagrams = function (strs) {
  //init map
  let hashMap = {};

  //create a sorted array from the strs input
  let sorted = strs.map((word) => word.split("").sort().join(""));

  for (let i = 0; i < strs.length; i++) {
    // strs[i] = eat, tea, tan, ate, nat, bat
    // sorted[i] = aet, aet, ant, aet, ant, abt

    //if map doesn't contain sorted strings
    if (!hashMap[sorted[i]]) {
      //set sorted strings as keys and set the strings that are the same letters as an array of values
      hashMap[sorted[i]] = [strs[i]];

      //Output => { aet: [ 'eat', 'tea', 'ate' ], ant: [ 'tan', 'nat' ], abt: [ 'bat' ] }
    } else {
      //otherwise push the sorted strings into the key
      hashMap[sorted[i]].push(strs[i]);

      //Output => { aet: [ 'eat', 'tea', 'ate' ], ant: [ 'tan', 'nat' ] }
    }
  }

  return Object.values(hashMap);
};
