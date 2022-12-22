/*
Take the num being passed and return all the numbers from 1 to num, separated by spaces but replace every number divisible by 3 with the word "Fizz", replace every number divisible by 5 with 'Buzz', and every number divisible by both 3 and 5 with the word 'FizzBuzz'.

Example:
Input: 3
Output: 1 2 Fizz

Input: 8
Output: 1 2 Fizz 4 Buzz Fizz 7 8

*/

function FizzBuzz(num) {
  let str = new String("");
  for (let i = 0; i <= num; i++) {
    if (i % 15 == 0) {
      str += "FizzBuzz ";
    } else if (i % 3 == 0) {
      str += "Fizz ";
    } else if (i % 5 == 0) {
      str += "Buzz ";
    } else {
      str += i + " ";
    }
  }

  return str.trim();
}
