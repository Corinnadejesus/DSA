/*
Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.
Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: true

Time: O(n * log n) | Space: O(1)
*/

var canAttendMeetings = function (intervals) {
    //TLDR: ENSURE THAT EACH MEETING ENDS BEFORE THE NEXT ONE STARTS

    //sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; i++) {
    //get the current interval -> [7, 10]
    let firstMeeting = intervals[i + 1][0];
    //get the previous interval -> [2, 4]
    let secondMeeting = intervals[i][1];

    //if the second meeting started before the first meeting ended, the meetings overlap
    if (secondMeeting > firstMeeting) {
      return false;
    }
  }
  return true;
};
