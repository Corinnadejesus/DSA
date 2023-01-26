/*
Given an array of intervals where intervals[i] = [start i, end i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
*/

var merge = function (intervals) {
  // sort the input array by 0th index to make checking pair easier
  intervals.sort((a, b) => a[0] - b[0]);

  // set results array, add first interval to it
  const results = [intervals[0]];

  // loop over intervals
  for (const interval of intervals) {
    //set end1 as the last element in the results array at index 1
    let end1 = results[results.length - 1][1];

    //set start2 as first value in interval
    let start2 = interval[0];

    //set end2 as second value in interval
    let end2 = interval[1];

    if (end1 >= start2) {
      //set the last value of the result array at index 1 = max value of end1 and end2
      results[results.length - 1][1] = Math.max(end1, end2);
    } else {
      results.push(interval);
    }
  }
  return results;
};
