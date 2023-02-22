/*
Can you write a function that reverses an inputted string without using the built-in Array#reverse method?
Do not use the built-in #reverse() method or [::-1] if Python
Ideal solution would run in O(n) time complexity and O(1) space complexity

Approach
    - Split string into an array
    - Set two pointers at beginning and end
    - While the beginning is less than or equal to the end
    - Swap each letter
    - Increment begin, decrement end to check for next letter
    - Turn the array back into a string
*/

function reverseString(str) {
    let newStr = str.split('')
    let begin = 0
    let end = str.length - 1
    while(begin <= end) {
        let temp = newStr[begin]
        newStr[begin] = newStr[end]
        newStr[end] = temp
        begin++
        end--
    }
    return newStr.join('')
}
