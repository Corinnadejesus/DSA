/*
Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, returns the earliest time slot that works for both of them and is of duration dur, otherwise return [].

The first epoch in a pair represents the start time of a slot. The second epoch is the end time of that slot. The input variable dur is a positive integer that represents the duration of a meeting in seconds.

Assume that the time slots in a person’s availability are disjointed, i.e, time slots in a person’s availability don’t overlap. Further assume that the slots are sorted by slots’ start time.

Input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 8
        
Output: [60, 68]

Time: O(N + M) | Space: O(1)

Approach for Optimization
  - Get the start times of array A, B
  - Get the end times of array A, B
  - Get diff in Intersection times
  - If dur is less than or equal to dur then there is a valid meeting window
  - If the start time of A is less than the start time of B
    - Increment A pointer otherwise increment B pointer
*/

function meetingPlanner(slotsA, slotsB, dur) {
  let ptA = 0;
  let ptB = 0;

  while (ptA < slotsA.length && ptB < slotsB.length) {
    let start = Math.max(slotsA[ptA][0], slotsB[ptB][0]);
    let end = Math.min(slotsA[ptA][1], slotsB[ptB][1]);
    let diff = Math.floor(end - start);
    if (dur <= diff) {
      return [start, start + dur];
    }

    if (slotsA[ptA][1] < slotsB[ptB][1]) {
      ptA++;
    } else {
      ptB++;
    }
  }

  return [];
}
