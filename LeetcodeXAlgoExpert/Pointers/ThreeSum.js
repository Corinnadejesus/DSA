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
*/

//Approach: Two Sum with Added Steps
// nums[i] + nums[j] + nums[k] == 0 => GOAL
// nums[j] + nums[k] = 0 - nums[i] => TARGET VALUE

var threeSum = function (nums) {
  //sort the array
  nums.sort((a, b) => a - b);

  //init array to hold triplets
  const holdTrips = [];

  //loop over array
  for (let i = 0; i < nums.length; i++) {
    //check if there are duplicates continue
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    //**** Two Pointer Solution Starts Here ****
    let target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    //while left is less than right
    while (left < right) {
      const sum = nums[left] + nums[right];
      //if sum is greater than target move right side (backward) towards the center
      if (sum > target) {
        right--;
        //if sum is less than target move left side (forward) towards the center
      } else if (sum < target) {
        left++;
      } else {
        //otherwise
        //push (array) of the triplets into holdTrips
        holdTrips.push([nums[i], nums[left], nums[right]]);

        //check for duplicates within the array on both left and right sides
        //while the LEFT current value is equal to previous value => increment left to skip duplicate
        while (nums[left] === nums[left + 1]) {
          left++;
        }

        //while the RIGHT current value is equal to previous value => decrement right to skip duplicate
        while (nums[right] === nums[right - 1]) {
          right--;
        }

        //increment left and right again to continue to look for triplets
        left++;
        right--;
      }
    }
  }
  return holdTrips;
};
