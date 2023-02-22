/*
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
Return the max sliding window.

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation:
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

Time: O(n)| Space: O(n)

If we have a window where there are values that are less than others we could remove them
*/

var maxSlidingWindow = function(nums, windowSize) {
  //Monotonic Dequeue Approach (Before an element is pushed, all elements smaller than it have to be popped off first)
  const dequeue = [];  // stores *indices*
  const results = [];
  for (let i = 0; i < nums.length; i++) {
      //while smaller values exist remove them
      while (dequeue && nums[dequeue[dequeue.length - 1]] <= nums[i]) {
        dequeue.pop();
      }
      dequeue.push(i);

      // remove first element if it's outside the window
      if (dequeue[0] === i - windowSize) {
        dequeue.shift();
      }

      // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
      if (i >= windowSize - 1) {
        results.push(nums[dequeue[0]]);
      }
  }
  return results;
};
