/*
A self-dividing number is a number that is divisible by every digit it contains.
For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
A self-dividing number is not allowed to contain the digit zero.

Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

Input: left = 1, right = 22
Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]

Approach
 - set a result array to hold list of self-dividing nums
 - create a helper function
    - convert input to string
    - loop through if ele is a 0 or division of itself has a remainder its not self-dividing
 - Iterate and call divideRules func on each index to check if any values from left to right have a remainder

 Time Complexity: O(D), where D is the number of integers in the range [L,R] and assuming log⁡(R) is bounded.
 In general, the complexity would be O(D log ⁡R).

Space Complexity: O(D), the length of the answer.
*/

var selfDividingNumbers = function (left, right) {
  let results = [];
  const divideRules = (num) => {
    const str = num.toString();
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "0" || num % Number(str[i])) return false;
    }
    return true;
  };

  for (let i = left; i <= right; i++) {
    if (divideRules(i)) {
      results.push(i);
    }
  }

  return results;
};
