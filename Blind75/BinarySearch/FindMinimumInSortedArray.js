/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

Time: O(log n) | Space: O(1)
*/

var findMin = function (nums) {
  //set two pointers that will go through the first and last elements in nums array
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    //get the middle value, this will update based on condition of the values
    let mid = Math.floor(left + (right - left) / 2);

    //check if mid is greater than right value, this tells us that mid pointer is at the left side of the array
    if (nums[mid] > nums[right]) {
      //so we update the left pointer to search the right side
      left = mid + 1;
    } else {
      right = mid; //not understanding the need to do this?
    }
  }
  return nums[left];
};
