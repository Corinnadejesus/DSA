/*
Prompt:

Take the str and encode the message according to the rule:
Encode every letter into its corresponding numbered position in the alphabet
Symbols and spaces will also be used in the input.

Example:
Input: "hello 45"
Output: 85121215 45

Input: "jaj-a"
Output: 10110-1
*/

function Encode(str) {
    let regEx = /[a-z]/i;
    let encodeArrStr = []

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(regEx)) {
            encodeArrStr.push(str.charCodeAt(i) - 96)
        } else {
            encodeArrStr.push(str[i])
        }
    }

    return encodeArrStr.join('')
}

