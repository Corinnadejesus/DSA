/*
Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit. Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, return an empty array.

Input: [4,6,10,15,16], Lim = 21
Output: [3, 1]

Input: [4,4,1], Lim = 5
Output: [2, 1]

Time: O(n) | Space: O(n)

Approach
    - Get the difference btw the limit and curr num
    - If difference is in map return array with current num index and diff index
    - Otherwise populate map with current num and its index
*/

function getIndicesOfItemWeights(arr, limit) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    let numNeeded = limit - char;

    if (numNeeded in map) {
      return [i, map[numNeeded]];
    } else {
      map[char] = i;
    }
  }
  return [];
}
