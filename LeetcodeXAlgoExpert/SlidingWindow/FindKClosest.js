/*
Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:
|a - x| < |b - x|, or
|a - x| == |b - x| and a < b

Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]

Time: O(n) | Space: O(1)
*/

var findClosestElements = function (arr, k, x) {
  let left = 0;
  let right = arr.length - 1;
  while (right - left >= k) {
    let leftE = Math.abs(arr[left] - x);
    let rightE = Math.abs(arr[right] - x);

    //if right is closer to x, push left closer cuz right ele is closer to x
    if (leftE < rightE || (arr[left] < arr[right] && leftE === rightE)) {
      right--;
    } else {
      left++;
    }
  }

  return arr.slice(left, right + 1);
};
