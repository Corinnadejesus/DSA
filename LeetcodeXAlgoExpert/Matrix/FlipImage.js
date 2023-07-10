/*
Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

Example 1:
Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
*/

//Brute Force
//Time: O(n^2) | Space: O(1)

var flipAndInvertImage = function (image) {
  for (let row = 0; row < image.length; row++) {
    image[row].reverse();
    for (let col = 0; col < image.length; col++) {
      if (image[row][col] === 0) {
        image[row][col] = 1;
      } else {
        image[row][col] = 0;
      }
    }
  }
  return image;
};

//Two Pointer (Optimized)
//Time: O(n) | Space: O(1)

var flipAndInvertImage = function (image) {
  for (let row = 0; row < image.length; row++) {
    let left = 0;
    let right = image.length - 1;

    while (left <= right) {
      //Invert left and assign both values to the inverted value
      image[row][left] = 1 - image[row][right];
      image[row][right] = image[row][left];

      left++;
      right--;
    }
  }

  return image;
};
