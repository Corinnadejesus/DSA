//Given a non-empty array of integers, write function that returns true if the second array is subsequence of the first array

//Example
/*
Array: [5, 3, 4 , 2, -6]
Sequence: [4, 9, 7, 2, 3]

Output: true
*/

function isValidSubsequence(array, sequence) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    //if element is a part of the sequence array increase the counter
    if (array[i] === sequence[counter]) {
      counter++;
    }
  }
  //if the counter counts the amount of pairs seen between both arrays
  //so if the counter is the same number as the sequence length then all the letters from the sequence has been found in the first array
  return counter === sequence.length;
}
