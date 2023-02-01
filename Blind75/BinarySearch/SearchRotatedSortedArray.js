/*
There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Time: O(log n) | Space: O(1)
*/

var search = function (nums, target) {
  /*
    ONLY ONE SIDE WILL BE SORTED
    [4,5,6,7,0,1,2] Target = 0
     L     M     R

    [4,5,6,7,0,1,2] target = 0
         R M L
    */
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    //calc mid (right - left) in case there is every a time where we getting a really large number
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      // Then we know left is sorted side, now check if target is in that range of our sorted side
      if (nums[left] <= target && target < nums[mid]) {
        //then we move the right backwards towards the target
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Then we know right is sorted side, now check if target is in that range
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
