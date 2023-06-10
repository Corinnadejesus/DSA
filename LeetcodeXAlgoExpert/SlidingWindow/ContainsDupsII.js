/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 2:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/

//Time: O(n) | Space: O(1) -> side of map does not grow in proportion to input size, size is based on k
var containsNearbyDuplicate = function (nums, k) {
  let left = 0;
  let right = 0;
  let map = {};
  while (right < nums.length) {
    if (nums[right] in map) {
      return true;
    } else {
      map[nums[right]] = true;
    }

    if (right - left === k) {
      delete map[nums[left]];
      left++;
    }

    right++;
  }

  return false;
};

//Hash Map Approach
//Time: O(n) | Space: O(n) -> size of map grows for every non-repeating value in the input
var containsNearbyDuplicate = function (nums, k) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (i - map[val] <= k) {
      return true;
    }
    //reassign the indices based on duplicates seen
    map[val] = i;
  }

  return false;
};
