/*
Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array.
The result should also be sorted in ascending order.
Prioritize the smaller number when both numbers are equally distance from the num (x).

Example 1:
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]

Example 2:
Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]

Approach
Check whether the length of the array is the same as the value of k. If they're equal, then return the original array.
Find the number closest to the given number using a binary search, and assign it as a left pointer.
Initialize the right pointers as an increment to the left pointer to keep track of the sliding window.
Start traversing the array until the sliding window size is less than k.
When the right pointer is reached at the end of the array or the distance of the left pointer from num is less than the distance of the right pointer from num, then move the sliding window to the left side.
Else, move the sliding window to the right side.

Time: O(log n + k)
    - Binary Search O(log n) needed to find starting point in window.
    - Window size growth is dependent on O(k).
Space: O(1)
*/

//Binary Search Helper Function
function binarySearch(nums, target) {
  let start = 0,
    end = nums.length - 1;

  if (start > end) return -1;

  while (start <= end) {
    // Finding the mid using integer division
    let mid = start + Math.floor((end - start) / 2);

    // Target value is present at the middle of the array
    if (nums[mid] == target) return mid;
    // If the target value is greater than the middle, ignore the first half
    else if (nums[mid] < target) start = mid + 1;
    // if the target value is less than the middle, ignore the second half
    else end = mid - 1;
  }
  return start;
}

function findClosestElements(nums, k, num) {
  // If array length is same as k return the original array
  if (nums.length == k) return nums;

  //We use binary search to locate either num in the array or the number nearest to it
  let left = binarySearch(nums, num) - 1,
    right = left + 1;

  // While the sliding window's size is less than k
  while (right - left - 1 < k) {
    // check for out of bounds
    if (left == -1) {
      right++;
      continue;
    }
    // Expand the window towards the side with the closer number
    // Be careful to not go out of bounds with the pointers
    // |a - num| < |b - num|,
    // |a - num| == |b - num|
    if (
      right == nums.length ||
      Math.abs(nums[left] - num) <= Math.abs(nums[right] - num)
    )
      left--;
    else {
      right++;
    }
  }
  // return the window
  return nums.slice(left + 1, right);
}
