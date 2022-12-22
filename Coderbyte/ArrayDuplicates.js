/*
Prompt:

Take the array of numbers stored in arr and determine the total number of duplicate entries.

Example:

Input: [1, 2, 2, 2, 3]
Output: 2

Input: [100, 2, 35, 3]
Output: 0
*/

function ArrayDuplicates(arr) {
    let duplicates = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; i < arr.length; j++) {
            if(arr[i] === arr[j] && i !== j) {
                duplicates++
                arr.splice(arr.indexOf(arr[i]), 1)
            }
        }
    }
    return duplicates;
}
