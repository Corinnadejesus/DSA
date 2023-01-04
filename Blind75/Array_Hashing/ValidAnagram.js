// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

//Time and Space Complexity: O(n)

var isAnagram = function(s, t) {
    //check the case if the length is not equal
    if(s.length !== t.length) return false

    //init hashmap
    let hashMap = {}

    //iterate over s length reference
    for(let i of s) {
        //set the key of hashmap to each element of s and set it at 1 since its been seen already
        hashMap[i] = (hashMap[i] || 0) + 1
    }

    //iterate over t length
    for(let j of t) {
        //if element of t does not exist OR has not been seen in hashmap
        if(!hashMap[j] || hashMap[j] === 0) {
            return false
        } else {
            //otherwise it has been seen, decrease the value from the hashmap and check the next letter
            hashMap[j]--
        }
    }
    return true

};
