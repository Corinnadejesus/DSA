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

//Two Sum with Added Steps

function threeSum(nums) {

    //edge case: when array has less than 3 values break

    //init holdTrips array to push triplet sets

    //sort the nums array

    //iterate over nums array (micro-optimization: iterate skipping 2 last numbers) and implement two pointers method

        //check for duplicates
            //if i is equal to the number previously, skip that number and move to the next one (continue)

        //init sum value of left and right

        //init left and right sides

        //while left is less than right
            //if the sum is equal to 0
                //PUSH triplets into holdTrips array
                //Increment left to next number
                //Decrement right to get to next number

            //if the sum, left, and right is less than 0
                //increment the left side to check next value

            //if the sum, left, and right is greater than 0
                //decrement the right side

}
