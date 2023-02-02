/*
You are given an m x n integer matrix with the following two properties:
Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.
You must write a solution in O(log(m * n)) time complexity.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

Time: O(log n) | Space: O(1)
*/

var searchMatrix = function(matrix, target) {
    let rows = matrix.length
    let cols = matrix[0].length
    let left = 0
    let right = rows * cols - 1 //matrix is 0-indexed
    while(left <= right) {
        let mid = Math.floor(left + (right - left))
        //                       ROW INDEX           COL INDEX
        //pivot splits the array in two parts
        let pivotVal = matrix[Math.floor(right/cols)][right % cols]

        if(target === pivotVal) return true
        if(target < pivotVal) right = mid - 1
        else left = mid + 1
    }
    return false
};
