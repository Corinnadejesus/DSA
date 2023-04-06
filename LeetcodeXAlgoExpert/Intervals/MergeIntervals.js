/*
Given an array of intervals where intervals[i] = [start i, end i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Time: O(n) | Space: O(1)

Approach
         S    E
        [0,  30]
        [5,  10]
        [15, 20]
  - sort the input array by 0th index
  - set results array, add first interval to it
  - end1: as the last element in the results array at index 1
  - end2: as second value in interval
  - start2: as first value in interval
  - set last ele in result as max between the last element in the results array and the second value in the interval
*/

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const results = [intervals[0]];

  for (const interval of intervals) {
    let end1 = results[results.length - 1][1]; //30
    let end2 = interval[1]; //10
    let start2 = interval[0]; //0

    if (end1 >= start2) {
      results[results.length - 1][1] = Math.max(end1, end2);
    } else {
      results.push(interval);
    }
  }
  return results;
};
