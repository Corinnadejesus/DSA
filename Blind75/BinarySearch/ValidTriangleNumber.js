/*
Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.


Example 1:

Input: nums = [2,2,3,4]
Output: 3
Explanation: Valid combinations are:
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3

Example 2:

Input: nums = [4,2,3,4]
Output: 4

If a triangle of side lengths a, b and c is said to be valid if, a+b > c, b+c > a and a+c > b.
*/

// Time: O(n * log(n)) | Space: O(1)
var triangleNumber = function (nums) {
  let result = 0;
  if (!nums || !nums.length) {
    return result;
  }

  nums.sort((a, b) => a - b);

  let i, j, k;
  /*
           k
     i
        j
    [2, 2, 3, 4]
     0  1  2  3

    i
              j
                 k
    [2, 2, 3, 4, 5]
    2,4,5
    2,4,5
    3,4,5

*/
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
