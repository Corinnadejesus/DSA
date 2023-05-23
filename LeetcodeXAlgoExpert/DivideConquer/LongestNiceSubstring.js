/*
A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

Input: s = "YazaAay"
Output: "aAa"
Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
"aAa" is the longest nice substring.

Approach
- BC: If the s length is less tha 2 return ''
    - Init Set with unique letters of s
    - Loop over s
        - If lowercase and uppercase version of char is in the set skip
            - (we only want to letters that do not have both upper and lowercase)
        - Separate the s at (z) into two strings and recursively loop
        - If current letter does not have both UC/LC in set split string again by left and right

 Sets:    {Y, a}      {a, A, y}
            Ya    z     aAay
            ^              ^
            /\           /\
          ""  a       aAa  ""

Time: O(n^2) | Space: O(n)
*/

var longestNiceSubstring = function (s) {
  let arr = [...s];
  if (arr.length < 2) return "";
  let set = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i].toLowerCase()) && set.has(arr[i].toUpperCase())) {
      continue;
    }

    //O(n) + O(n)
    const str1 = longestNiceSubstring(s.substring(0, i));
    const str2 = longestNiceSubstring(s.substring(i + 1));

    if (str1.length >= str2.length) {
      return str1;
    } else {
      return str2;
    }
  }
  return s;
};
