/*
Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.
To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].

Time: O(n * m) m: length of the array inside of image
Space: O(1)
*/

var flipAndInvertImage = function (image) {
  //PART 1: INVERT THE FIRST ARRAY)
  for (let i = 0; i < image.length; i++) {
    //create two pointers
    let left = 0;
    let right = image[i].length - 1;
    //while left is less than right pointer
    while (left < right) {
      //swap left ele with right ele by creating a temp
      let temp = image[i][left];
      image[i][left] = image[i][right];
      image[i][right] = temp;

      //continue on to the other values
      left++;
      right--;
    }
  }

  //PART 2: INVERT OTHER TWO ARRAYS
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      //if ele is 0 swap it to 1
      if (image[i][j] === 0) {
        image[i][j] = 1;
      } else {
        //else if value is 1 swap to 0
        image[i][j] = 0;
      }
    }
  }
  return image;
};
