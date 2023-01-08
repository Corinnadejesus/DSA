/*
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
For example, "ace" is a subsequence of "abcde". ORDER MATTERS HERE
A common subsequence of two strings is a subsequence that is common to both strings.

Example 1:
Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
*/

// DYNAMIC PROGRAMMING PROBLEM (SOLVE WITH A TABLE)
// T: | S:
function longestCommonSeq(text1, text2) {
  //create table X: text1, Y: text2
  const table = Array.from({ length: text1.length + 1 }, () =>
    new Array(text2.length + 1).fill("")
  );

  //iterate over rows
  for (let row = 1; row < table.length; row++) {
    //iterate over columns
    for (let col = 1; col < table[row].length; col++) {
      //if x, y of table are same letters
      //because were setting length 1 more than input text have to have i - 1
      if (text1[row - 1] === text2[col - 1]) {
        //then take whats diagonal and set the value to it
        table[row][col] = table[row - 1][col - 1] + text1[row - 1];
      } else {
        //get the max length of what is above and to the left of cell
        let aboveChar = table[row - 1][col];
        let leftChar = table[row][col - 1];

        //set the table to the max length
        table[row][col] =
          aboveChar.length > leftChar.length ? aboveChar : leftChar;
      }
    }
  }
  return table[table.length - 1][table[0].length - 1].length;
}

////////******OPTIMIZED SOLUTION*******//////////
//QUESTION: HOW IS THIS OPTIMIZED WHEN USING 3 LOOPS??

function longestCommonSubsequence(text1, text2) {
  const shorter = text1.length >= text2.length ? text2 : text1;
  const longer = text1.length >= text2.length ? text1 : text2;

  const dp = [];

  for (let i = 0; i <= longer.length; i++) {
    dp[i] = new Array(shorter.length + 1).fill(0);
  }

  dp[0] = new Array(shorter.length + 1).fill(0);
  dp.forEach((a) => {
    a[0] = 0;
  });

  for (let i = 1; i < longer.length + 1; i++) {
    for (let j = 1; j < shorter.length + 1; j++) {
      const count = shorter[j - 1] === longer[i - 1] ? 1 : 0;
      dp[i][j] = Math.max(count + dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[longer.length][shorter.length];
}
