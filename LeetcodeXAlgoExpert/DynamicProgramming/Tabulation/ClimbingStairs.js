/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Time: O(n) -> n is the number of steps | Space: O(n)

Approach
    n = 0, 1, 2, 3, 4, 5
steps =[8  5  3  2  1  1]
Start at 5, how many steps to get to 5 -> 1 step
Now at 4, how many steps to get to 5 -> 1 step
3 -> we have two steps because we add the previous two steps (1 + 1)
2 -> (2 + 1)
1 -> (3 + 2)
0 -> (5 + 3)

*/

var climbStairs = function (n) {
  //set an array with the first two values you need
  let stairs = [];
  stairs[1] = 1;
  stairs[2] = 2;

  for (let i = 3; i <= n; i++) {
    stairs[i] = stairs[i - 1] + stairs[i - 2];
  }

  return stairs[n];
};
