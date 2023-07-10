/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
*/

//Brute Force
// Time O(N^2) | Space O(1)
var twoSum = function (nums, target) {
  //iterate over the array of nums
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      //determine if first and second elements add up to target
      if (nums[i] + nums[j] === target) {
        // return indexes
        return [i, j];
      }
    }
  }
};

//Optimal
//Time: O(n) | Space O(n)
var twoSum = function (nums, target) {
  //init map
  const hashMap = {};
  //iterate over nums array

  for (let i = 0; i < nums.length; i++) {
    //get the value needed by subtracting target from current element of array
    const numNeeded = target - nums[i];

    //if map key is not undefin1ed, edge case for the first iteration
    if (hashMap[numNeeded] !== undefined) {
      //extract the numNeeded as the key and its index as the value from the map
      return [map[numNeeded], i];
    }
    //otherwise set the current element as a key in the map and store current element's index as the value if needed to search for later
    hashMap[nums[i]] = i;
  }
};
