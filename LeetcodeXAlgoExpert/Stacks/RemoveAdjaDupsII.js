/*
You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.
Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

Example 1:
Input: s = "abcd", k = 2
Output: "abcd" => Explanation: There's nothing to delete.

Example 2:
Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation:
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"

Time: O(n) | Space: O(n)
*/

//Approach: Storing String Chars and Freq Seen in Stack
function removeDuplicates(s, k) {
  let result = "";
  const stack = [];
  for (const char of s) {
    if (stack.length > 0 && stack[stack.length - 1].char === char) {
      stack[stack.length - 1].freq++;
      if (stack[stack.length - 1].freq === k) {
        stack.pop();
      }
    } else {
      stack.push({ char, freq: 1 });
    }
  }

  for (const { char, freq } of stack) {
    result += char.repeat(freq);
  }
  return result;
}


/////////////////************* ALTERNATIVE *************/////////////////


//Approach: Storing Count of String Chars in Stack
var removeDuplicates = function (s, k) {
  let stack = [];
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i] !== s[i - 1]) {
      stack.push(1);
    } else {
      stack[stack.length - 1]++;
      if (stack[stack.length - 1] === k) {
        stack.pop();
        s.splice(i - k + 1, k);
        i = i - k;
      }
    }
  }
  return s.join("");
};
