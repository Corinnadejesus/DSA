/*
Given an array of positive numbers and a positive number 'k', find the maximum sum of any contiguous subarray of size 'k'

Example 1:
Input: [2, 1, 5, 1, 3, 2], k = 3
Output: 9
Explanation: sum of [5, 1, 3] = 9

Example 2:
Input: [2, 3, 4, 1, 5], k = 2
Output: 7
Explanation: sum of [3, 4] = 7

Time: O(n) | Space: O(1)
*/

function maxSubarraySum(arr, k) {
  let currSum = 0;
  let maxSum = 0;
  let right = 0;
  let left = 0;
  //calculates the maxSum from 0 to K
  while (right < k) {
    maxSum += arr[right];
    right++;
  }

  currSum = maxSum;
  //calculate remaining sum from k to arr.length, subtracting value from left while adding value from right
  while (right < arr.length) {
    currSum = currSum - arr[left];
    left++;

    currSum += arr[right];
    right++;

    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum;
}
