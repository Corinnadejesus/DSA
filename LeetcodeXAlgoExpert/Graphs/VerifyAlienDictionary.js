/*
In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

Example 1:
Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

Example 2:
Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character

Time: O(n^2)| Space: O(n)
*/

var isAlienSorted = function (words, order) {
  //create map of dictionary
  let dicMap = {};
  for (let i = 0; i < order.length; i++) {
    dicMap[order[i]] = i;
  }

  //loop to run through words array
  for (let i = 1; i < words.length; i++) {
    //loop to run through each index words array
    for (let j = 0; j < words[i - 1].length; j++) {
      //check if first word has letter but decond word is empty
      if (words[i - 1][j] && words[i][j] === undefined) return false;

      // check if both words occurence is equal or not
      if (dicMap[words[i - 1][j]] === dicMap[words[i][j]]) {
        continue;
      } else if (dicMap[words[i - 1][j]] > dicMap[words[i][j]]) {
        return false;
      } else {
        break;
      }
    }
  }

  return true;
};
