/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

Time: O(n) | Space: O(1)

Approach
    - Create left pointer at 0
    - Iterate over nums with right pointer at 1
        - If the curr element is not the same as the element at left pointer
            - Increment left pointer to the next value
            - Reassign value at left to value at right
*/

var removeDuplicates = function (nums) {
  let left = 0;
  for (let right = 1; right < nums.length; right++) {
    let curr = nums[right];
    if (curr !== nums[left]) {
      left++;
      nums[left] = nums[right];
    }
  }

  return left + 1;
};
