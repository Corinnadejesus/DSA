/*
Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Time: O(n) | Space: O(n)
*/

var numIdenticalPairs = function(nums) {
    let count = 0
    let map = {}
    for(let num of nums) {
        if(map[num]) {
            count += map[num]
            map[num]++
        } else {
            map[num] = 1
        }
    }

    return count
}
