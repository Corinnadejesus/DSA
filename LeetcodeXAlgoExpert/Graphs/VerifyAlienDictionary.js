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

Approach
  - If the first word is a prefix of the second word then second work must be after first word (return true).
  - If second word ends before first word and there are no different letters (return false).
  - If we find the first different letter and the two words are in the wrong order (return false).
*/

var isAlienSorted = function (words, order) {
  for (let i = 0; i < words.length - 1; i++) {
    // Loop all words
    for (let j = 0; j < words[i].length; j++) {
      // Loop all chars of word[i]
      const indexCurrent = order.indexOf(words[i][j]); // Get index of char at j of current word
      const indexNext = order.indexOf(words[i + 1][j]); // Get index of char at j of next word
      if (indexCurrent < indexNext) break; // Break for-loop if indexCurrent is smaller than indexNext
      if (indexCurrent > indexNext) return false; // Return false if indexCurrent is greater than indexNext (not sorted in alien language)
    }
  }
  return true; // Return true (given words are sorted lexicographically in given alien language)
};

///////*********** ALTERNATE *********//////////////

var isAlienSorted = function (words, order) {
  //create map of dictionary
  let dicMap = {};
  for (let i = 0; i < order.length; i++) {
    dicMap[order[i]] = i;
  }

  //loop to run through words array
  for (let i = 1; i < words.length; i++) {
    //loop to run through each index words array
    //[i - 1] -> we want to stop at the second to last word to compare every adjacent pair of words
    for (let j = 0; j < words[i - 1].length; j++) {
      //if first word has letter but second word is empty
      if (words[i - 1][j] && words[i][j] === undefined) return false;

      //if the word pairs are equal
      if (dicMap[words[i - 1][j]] === dicMap[words[i][j]]) {
        continue;
        //if the first word is larger than the second word
      } else if (dicMap[words[i - 1][j]] > dicMap[words[i][j]]) {
        return false;
      } else {
        break;
      }
    }
  }

  return true;
};
