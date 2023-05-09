/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Time: O(n)
Space: O(1)
*/

var rotate = function (nums, k) {
  k = k % nums.length;

  let helper = function (left, right) {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  };

  //[7,6,5,4,3,2,1]
  helper(0, nums.length - 1);

  //[5,6,7,4,3,2,1]
  helper(0, k - 1);

  //[5,6,7,1,2,3,4]
  helper(k, nums.length - 1);
};
