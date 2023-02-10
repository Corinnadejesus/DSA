/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Time: O(n) | Space: O(n)
*/

var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const result = [];

  //set the frequencies of the numbers in the map
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  //destructure the num and frequency inside the map
  for (let [num, freq] of freqMap) {
    //check if occurrences of the number are in the bucket, if not make a set and add its number
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  //iterate backwards through the bucket because we want the numbers with the max frequency
  for (let i = bucket.length - 1; i >= 0; i--) {
      //for each freq in the set, if there are any numbers associated with it push it into the result
    if (bucket[i]) {
      result.push(...bucket[i])
      console.log(result)
    }
    //keep pushing the most frequent numbers into result until length matches cap (k)
    if (result.length === k) {
        break
    }
  }
  return result;
};
