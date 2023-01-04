/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

Time: O(n)
Space: O(1)
*/


var twoSum = function(numbers, target) {
    //Approach: Two Pointers

    //init left and right side
        let left = 0
        let right = numbers.length - 1

    //iterate over array
    while(left < right) {
        //Get the sum of values you have
        const sum = numbers[left] + numbers[right]

        //if sum is larger than target decrease the right pointer
        if(sum > target) {
            right--

        //if num needed is smaller than target increase the left pointer
        } else if (sum < target) {
            left++
        } else {
            //return the array of values, adding 1 to have them 1-indexed
            return [left + 1, right + 1]

        }
    }
};
