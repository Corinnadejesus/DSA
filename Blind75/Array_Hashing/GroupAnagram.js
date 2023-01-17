/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]
*/

function groupAnagram(strs) {
     //init map
     let hashMap = {}

     //create a sorted array from the strs input
     let sortedStrs = strs.map((word) => word.split('').sort().join(''))

     for(let i = 0; i < strs.length; i++) {
         //if the letters of strs ele does not match the key of the map of sorted Strs
         if(!hashMap[sortedStrs[i]]) {
             //then the letters of the keys in the map AND str elements do not match
             //set strs ele as the value of map as an array
             hashMap[sortedStrs[i]] = [strs[i]]

         } else {
             //otherwise the letters of the map keys AND str elements match and should be pushed into array of values
             hashMap[sortedStrs[i]].push(strs[i])
         }
     }

     return Object.values(hashMap)
}
