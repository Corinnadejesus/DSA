/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Approach
Left:   [1,1,2,6]
Right: [24,12,4,1]
Multiply pre * post
*/

//Time: O(n) | Space: O(n)
function productExceptSelf(nums) {
  const result = new Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
}



////////////////////*************** ALTERNATIVE **************////////////////



//Time: O(n) | Space: O(n)
function productExceptSelf(nums) {
  const prefix = new Array(nums.length).fill(1);
  const postfix = new Array(nums.length).fill(1);
  const result = new Array(nums.length).fill(1);

  // Populate prefix
  for (let i = 0; i < nums.length; i++) {
    let prev = prefix[i - 1];
    if (i - 1 < 0) prev = 1;

    prefix[i] = nums[i] * prev;
  }

  // Populate postfix
  for (let i = nums.length - 1; i >= 0; i--) {
    let next = postfix[i + 1];
    if (i + 1 >= postfix.length) next = 1;

    postfix[i] = nums[i] * next;
  }

  // Populate result
  for (let i = 0; i < nums.length; i++) {
    let prev = prefix[i - 1];
    if (i - 1 < 0) prev = 1;

    let next = postfix[i + 1];
    if (i + 1 >= postfix.length) next = 1;

    result[i] = prev * next;
  }

  return result;
}
