/*

*/

var maxSlidingWindow = function (nums, windowSize) {
  let result = [],
    window = [];

  if (windowSize > nums.length) windowSize = nums.length;

  for (let i = 0; i < windowSize; i++) {
    //while smaller values exist remove them
    while (window.length && nums[i] > nums[window[window.length - 1]]) {
      window.pop();
    }
    //add the new value
    window.push(i);
  }
 
  result.push(nums[window[0]]);

  for (let i = windowSize; i < nums.length; i++) {
    if (window.length && window[0] <= i - windowSize) window.shift();
    
    //if the left value is out of bounds then remove from window
    while (window.length && nums[i] >= nums[window[window.length - 1]]) {
      window.pop();
    }

    window.push(i);
    result.push(nums[window[0]]);
  }

  return result;
};
