/*
Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

Input: nums = [2,2,3,4]
Output: 3
Explanation: Valid combinations are:
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3

Input: nums = [4,2,3,4]
Output: 4

If a triangle of side lengths a, b and c is said to be valid if, a+b > c, b+c > a and a+c > b.

Time: O(n * log(n)) | Space: O(1

Approach
  - If nums is empty return result, Sort nums, set 3 pointers
  - Start k as value before last element (happens to be 3 because i and j also need placement)
  - i set to first element, j set to element right before k (**indices get re-calculated at every iteration**)
  - loop as long as the indices of i is less than j
    - if values of the num at i and j, are less than value of num at k
      - subtract the index values of i and j and to result, decrement j
    - otherwise increment i
*/

// )
var triangleNumber = function (nums) {
  let result = 0;
  if (!nums || !nums.length) {
    return result;
  }

  nums.sort((a, b) => a - b);

  let i, j, k;
  for (k = nums.length - 1; k > 1; k--) {
    i = 0;
    j = k - 1;
    while (i < j) {
      if (nums[i] + nums[j] > nums[k]) {
        result += j - i;
        j--;
      } else {
        i++;
      }
    }
  }

  return result;
};
