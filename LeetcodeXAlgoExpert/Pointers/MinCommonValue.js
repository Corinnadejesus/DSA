/*
Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
Output: 2
Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.

Time: O(n * m) | Space: O(1)
*/

var getCommon = function (nums1, nums2) {
  let left = 0;
  let right = 0;

  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] === nums2[right]) {
      return nums1[left];
    } else if (nums1[left] < nums2[right]) {
      left++;
    } else {
      right++;
    }
  }
  return -1;
};
