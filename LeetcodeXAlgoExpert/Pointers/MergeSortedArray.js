/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

Three Pointer Walk-Through
        [1,2,3,0,0,0]   [2,5,6]
             F     i         S
    If (F < S) then take value at S and set it as the value at i, decrement S and i

        [1,2,3,0,0,6]   [2,5,6]
             F     i       S

        [1,2,3,0,5,6]   [2,5,6]
             F i         S
    In this case, (F > S) so take the value at F (3) and set it as the value at i, decrement F and i

        [1,2,3,3,5,6]   [2,5,6]
           F i           S
    F and S are the same values but we want to CLEAR OUT nums2 array so we take value at S and set it as the value at i

        [1,2,2,3,5,6]   [2,5,6]
           F i         S

Time: O(n + m) | Space: O(1)
*/

var merge = function (nums1, m, nums2, n) {
  let firstPointer = m - 1;
  let secondPointer = n - 1;
  let ithPointer = m + n - 1;

  //while there are elements in second pointer
  while (secondPointer >= 0) {
    //find largest value between first and second pointers
    let firstVal = nums1[firstPointer];
    let secondVal = nums2[secondPointer];

    if (firstVal < secondVal) {
      //update the value of the ith pointer to be the second value
      nums1[ithPointer] = secondVal;
      secondPointer--;
      ithPointer--;
    } else {
      //update the value of the ithPointer to be the first value
      nums1[ithPointer] = firstVal;
      ithPointer--;
      firstPointer--;
    }
  }
};
