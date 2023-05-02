/*
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
For example, "ace" is a subsequence of "abcde". ORDER MATTERS HERE
A common subsequence of two strings is a subsequence that is common to both strings.

Example 1:
Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 3:
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
*/

//Tabulation (Optimal because table created, no recursive call stack used or extra memory allocated to)
//Time: O(m * n) | Space: O(m * n)
function longestCommonSubsequence(text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

//////////////*************** ALTERNATIVE ****************//////////////////

// Memoization
//Time: O(m * n) | Space: O(m * n)
function longestCommonSeq(text1, text2) {
  const memo = new Map();

  function lcsHelper(i, j) {
    if (i === text1.length || j === text2.length) {
      return 0;
    }

    const memoKey = `${i}-${j}`;
    if (memo.has(memoKey)) {
      return memo.get(memoKey);
    }

    let result;
    if (text1[i] === text2[j]) {
      result = 1 + lcsHelper(i + 1, j + 1);
    } else {
      const left = lcsHelper(i + 1, j);
      const right = lcsHelper(i, j + 1);
      result = Math.max(left, right);
    }

    memo.set(memoKey, result);
    return result;
  }

  return lcsHelper(0, 0);
}
