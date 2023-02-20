/*
Given a sorted array of numbers (both positive and negative), return the unique values in the array
Example:
[1,1,1,2,3,4,4,4,5,7,8] // 8
[2,2,2,2,3] // 2
[] // 0

Time and Space Complexity: O(n)
*/

function countUniqueValues(nums) {
    if(nums.length === 0) return 0

    let i = 0;
    //set j as the first index of the num array
    for (let j = 1; j < nums.length; j++) {
        //if i does not equal to j we have a unique value
        if(nums[i] !== nums[j]) {
            //Increment i to the next value in the array, record previous value of i to the unique value of j
            i++
            nums[i] = nums[j]
        }
    }
    //because i was set at 0, we want to start at 1
    return i + 1
}
