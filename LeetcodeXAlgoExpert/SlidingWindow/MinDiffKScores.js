/*
You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.

Return the minimum possible difference.
Input: nums = [9,4,1,7], k = 2
Output: 2
Explanation: There are six ways to pick score(s) of two student, the minimum possible difference is 2.

Time: O(n log n) | Space: O1
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
