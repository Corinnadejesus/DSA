// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

//Time and Space Complexity: O(n)

var isAnagram = function (s, t) {
  //EDGE CASE: if the length of both strings are not equal
  if (s.length !== t.length) return false;

  let hashMap = {};

  for (let i of s) {
    //set the key of hashmap to each element of s and set it at 1 since its been seen already
    hashMap[i] = (hashMap[i] || 0) + 1;
  }

  for (let j of t) {
    //if letter of t is not the same as letter of s in map
    //OR the frequency of letters seen in map hits 0 (edge case to ensure the freq does not get to a negative number)
    if (!hashMap[j] || hashMap[j] === 0) {
      return false;
    } else {
      //otherwise it has been seen, decrease the value from the hashmap and check the next letter
      hashMap[j]--;
    }
  }
  return true;
};

//////////////////**************** ALTERNATIVE **************////////////////////
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let hashMap = {};

  for (let char of s) {
    if (!hashMap[char]) {
      hashMap[char] = 0;
    }
    hashMap[char]++;
  }

  for (let char of t) {
    hashMap[char]--;
    if (hashMap[char] === 0) delete hashMap[char];
  }

  return !Object.keys(hashMap).length;
};
