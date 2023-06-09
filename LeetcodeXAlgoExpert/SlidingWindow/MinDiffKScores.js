/*
You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

Pick the scores of any k students from the array and return the minimum possible difference between the highest and lowest of the k scores.

Input: nums = [9,4,1,7], k = 2
Output: 2
Explanation: There are six ways to pick score(s) of two student, the minimum possible difference is 2.

Time: O(n log n) | Space: O(1)

Approach
  - Loop through sorted input
    - At every iteration subtract the larger right digit from the smaller left digit and update minVal to the lowest value
*/

var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);

  let minVal = Infinity;
  for (let i = 0; i <= nums.length - k; i++) {
    let left = nums[i];
    let right = nums[i + k - 1];
    minVal = Math.min(minVal, right - left);
  }

  return minVal;
};
