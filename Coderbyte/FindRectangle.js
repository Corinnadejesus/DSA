/*
Write a function that takes in the image and returns one of the following representations of the rectangle of 0's: top-left coordinate and bottom-right coordinate OR top-left coordinate, width, and height.

image1 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
]

Sample output variations (only one is necessary):

findRectangle(image1) =>
  row: 2, column: 3, width: 3, height: 2
  2,3 3,5 -- row,column of the top-left and bottom-right corners
*/

function findRectangle(arr) {
    for(let row = 0; row < arr.length; row++) {
      for(let col = 0; col < arr[row].length; col++) {
        if(arr[row][col] === 0) {
          return [row, col]
        }

      }
    }
  }

  function findLastRectangle(arr) {
    let last = []
    for(let row = 0; row < arr.length; row++) {
      for(let col = 0; col < arr[row].length; col++) {
        if(arr[row][col] === 0) {
          last = [row, col]
        }
      }
    }
    return last
  }

  function combine(arr) {
    return [findRectangle(arr), findLastRectangle(arr)]
  }
