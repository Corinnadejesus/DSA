/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Time: O(n) | Space: O(1)
*/

function containsDuplicates(arrNums) {
  let obj = {};

  for (let i = 0; i < arrNums.length; i++) {
    //check if element is IN obj map
    //set the key of the obj as the element in the array
    //everytime the key is seen in the iterated array the value is set to 1
    if (arrNums[i] in obj) return true;
    obj[arrNums[i]] = 1;
  }
  return false;
}

//////////////////******************* ALTERNATE ********************///////////////////////

var ContainsDuplicate = function(nums) {
    //Loop over the array, set the element of array as a key in the object and if element is found for the first time within the array we will set its value to 1, otherwise we will the increase the value by 1 because it has been seen before.
    let obj = {};

    for(let i of nums){
        obj[i] = (obj[i] || 0) + 1;
    }

    //Loop over the object and check if there is any KEY whose VALUE is more than 1 (i.e it has occurred more than once in the array). If yes we return true, else false at the end.
    for(let i in obj){
        if(obj[i]>1){
            return true;
        }
    }
    return false;
};
