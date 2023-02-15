/*
Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

Example:
input:  arr = ['x','y','z'], str = "xyyzyzyx"
output: "zyx"

Time: O(n + m) | Space: O(n)
  Approach
    - Scan input str at head and tail index
    - Iterate over input string
    - Create a temp substring with (head, head + 1, tail)
    - Increment tail until the temp has every unique char
    - If the temp === arr.length we have the shortest valid substring (return temp)
    - Otherwise, Increment head index as long as the temp substring remains valid
    - If the temp is shorter than the previous substring, update it to be the current substring
*/

function getShortestUniqueSubstring(arr, str) {
  let headIndex = 0;
  let result = "";
  let uniqueCounter = 0;
  let countMap = {};

  // initialize countMap
  for (let i = 0; i < arr.length; i++) {
    countMap[arr[i]] = 0;
  }

  // scan str
  for (let tailIndex = 0; tailIndex < str.length; tailIndex++) {
    // handle the new tail
    let tailChar = str[tailIndex];

    // skip all the characters not in arr
    if (!(tailChar in countMap)) {
      continue;
    }

    let tailCount = countMap[tailChar];
    if (tailCount == 0) {
      uniqueCounter++;
    }

    countMap[tailChar]++;

    // push head forward
    while (uniqueCounter == arr.length) {
      let tempLength = tailIndex - headIndex + 1;
      if (tempLength == arr.length) {
        // return a substring of str from headIndex to tailIndex(inclusive)
        return str.slice(headIndex, tailIndex + 1);
      }

      if (result === "" || tempLength < result.length) {
        // update result
        result = str.slice(headIndex, tailIndex + 1);
      }

      let headChar = str[headIndex];

      if (headChar in countMap) {
        let headCount = countMap[headChar] - 1;
        if (headCount === 0) {
          uniqueCounter--;
        }
        countMap[headChar]--;
      }

      headIndex++;
    }
  }
  return result;
}
