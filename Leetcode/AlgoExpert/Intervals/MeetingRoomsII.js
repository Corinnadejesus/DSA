/*
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2

Example 2:
Input: intervals = [[7,10],[2,4]]
Output: 1

Time: O(n * log n) | Space: O(n)

Walk-through
start:    [0,  5,  15]
end:      [10, 20, 30]
*/

var minMeetingRooms = function (intervals) {
  if (!intervals || intervals.length < 1) {
    return 0;
  }

  let rooms = 0;
  let endIdx = 0;

  const starts = intervals.map((a) => a[0]).sort((a, b) => a - b);
  const ends = intervals.map((a) => a[1]).sort((a, b) => a - b);

  for (let i = 0; i < intervals.length; i++) {
    //if the starting meeting time is less than the ending meeting time
    if (starts[i] < ends[endIdx]) {
      //there is more than one meeting going on, increase the rooms needed
      rooms++;
    } else {
      //EC: if the start and end time are the same
      //if the end time is greater than the start time
      //a meeting has to end before the next meeting starts so move to the end index to the next end meeting time
      endIdx++;
    }
  }
  return rooms;
};
