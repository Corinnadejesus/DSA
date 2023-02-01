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

SOLUTION VIDEO: YOUTUBE NEETCODE EXAMPLE STARTS AT 12:38

Time: O(log n + k)
    - Binary Search O(log n) needed to find starting point in window.
    - Window size growth is dependent on O(k).
Space: O(1)
*/

//Binary Search Helper Function
function binarySearch(nums, target) {
  let start = 0
  let end = nums.length - 1;

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

/*
    [1,2,3,4,5], k = 4, x = 3
     L R

WINDOW: 2
*/
function findClosestElements(nums, k, num) {
  // If array length is same as k return the original array
  if (nums.length == k) return nums;

  //We use binary search to locate either num in the array or the number nearest to it
  //Why do we minus 1?
  let left = binarySearch(nums, num) - 1;
  let right = left + 1;
  let window = right - left - 1;

  // While the sliding window size is less than k, check which number is closer to x
  while (window < k) {
    // check if out of bounds
    if (left == -1) {
      right++;
      continue;
    }
    //If right pointer is at the end of the array OR the distance of the left pointer from num is less than or equaled to the distance of the right pointer from num
    if (
      right == nums.length ||
      Math.abs(nums[left] - num) <= Math.abs(nums[right] - num)
    )
      // then move the sliding window to the left edge to include element in our output
      left--;
    else {
      right++;
    }
  }

  return nums.slice(left + 1, right);
}
