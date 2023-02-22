// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

//Time | Space: O(n)

var isValid = function(s) {
    //Approach: hashMap and Stack

    //Init stack: it helps to check valid pairs
    const stack = []

    //Set up hashMap with all valid parentheses pairs set
    const hashMap = {'(': ')', '{': '}', '[': ']'}

    //iterate over string
    for(const ele of s) {
        //if element is closing bracket and in the hashmap
        if(hashMap[ele]) {
            //push it into the stack
            stack.push(hashMap[ele])
        //if element is opening bracket and last item in stack is equal to the element
        } else if (stack[stack.length - 1] === ele) {
            //pop it out of the stack
            stack.pop()
        } else {
            //element is closing bracket and not in the stack
            return false
        }
    }
    //return boolean checking if the stack is empty, if it is ALL pairs were found
    return stack.length === 0
};
