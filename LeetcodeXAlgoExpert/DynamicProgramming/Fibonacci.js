/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
*/
/* RECURSION
Time: O(2^n) -> every recursive call leads to two additional calls | Space: O(1) */
var fib = function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

//***************************************************************************//

/* MEMOIZATION
Storing results of expensive function calls and returning cached result when the same input occurs again
Time: O(n) -> our input grows in proportion to n (estimate)
Space: O(n) -> array that is storing result is also proportional to n */
var fib = function (n, memo = []) {
  if (memo[n]) return memo[n];
  if (n <= 1) return n;
  let result = fib(n - 1, memo) + fib(n - 2, memo); //calculate result
  memo[n] = result; //store it in memo, so it could be referenced later if needed
  return result;
};

/* TABULATION
Time: O(n) | Space: O(n) */
var fib = function (n) {
  if (n <= 1) return n;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    //at every iteration were calculating a new number by adding the two previous values
    //fib of 3 is equaled to the addition of the two numbers before it
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
};
