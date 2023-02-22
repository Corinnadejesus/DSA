/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    //recalculate the mid every iteration
    let mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] === target) {
      return mid;

      //if the middle value is greater than the target, all left values are smaller than the target, so ignore it
      //and set left to 1 number after of middle value on the right half
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      //Otherwise the middle value is less than target, ignore the right half
      //and set right to 1 number before the middle value on the left side
      right = mid - 1;
    }
  }

  //if we can't find the target, then we return -1
  return -1;
};
