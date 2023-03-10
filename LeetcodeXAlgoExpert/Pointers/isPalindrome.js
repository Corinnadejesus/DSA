// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


// Time O(N) | Space O(1)

var isPalindrome = function(s) {
    // lower case the string, remove all non-alphanumeric chars
    // *** create regex to replace special chars with "" ***
    let lowerS = s.toLowerCase().replace(/[^a-z0-9]/g, '')

    //slice the string into two pointers to keep track of indices
    //init left pointer
    let left = 0

    //init right pointer
    let right = lowerS.length - 1

    //while left is less than right
    while(left < right){
        //check if the current letters are not the same
        if(lowerS[left] !== lowerS[right]) {
            return false
        }
        //otherwise move to the next letters on left and right side to check
        left++
        right--
    }
    return true
}
