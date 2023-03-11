/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

Time: O(n^2) | Space: O(n)

Approach
GOAL => nums[i] + nums[j] + nums[k] == 0
TARGET VALUE => nums[j] + nums[k] = 0 - nums[i]
    - Sort the input and Iterate
    - If the curr val is a previous duplicate skip it
    - Set target value, left and right pointers
    - While left is less than right
        - If the sum of left, right, and curr is less than 0 -> increment left
        - Else if its greater -> decrement right
        - Else we found a triplet
            - Add array of trips (left, right, curr) to holdTrips array
            - while duplicates exist on left side -> increment left
            - while duplicates exist on right side -> decrement right
            - Decrement right, increment left to look for other triplets
*/

//Approach: Two Sum with Added Steps

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const holdTrips = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        holdTrips.push([nums[i], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) {
          left++;
        }

        while (nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      }
    }
  }
  return holdTrips;
};
