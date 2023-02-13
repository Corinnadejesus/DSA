/*
Given two strings s and t of lengths m and n respectively, return the minimum window
substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Time: O(n + m) | Space: O(n)
*/

function minWindow(s, t) {
  let map = new Map();
  let left = 0;
  let right = 0;
  let len = Infinity; //this will be the starting length of the substring
  let count = map.size; //keep track of the size of the map
  let minWindow = "";

  /* STEP 1: SET FREQ OF T STRING IN MAP*/
  for (let letter of t) {
    if (!map.has(letter)) {
      map.set(letter, 1); //set freq to 1
    } else {
      //letter has been seen in map so add 1 to freq
      map.set(letter, map.get(letter) + 1);
    }
  }

  /* STEP 2: THE GOAL HERE IS TO FIND EACH LETTER IN S WITH A FREQ IN OUR MAP, AS WE FIND THESE VALUES WE DECREASE THE FREQ COUNT TO GET IT TO 0 SO WE KNOW WE HAVE A VALID SUBSTRING */
  while (right < s.length) {
    //extract letter at right pointer
    let rLetter = s[right];
    if (map.has(rLetter)) {
      //decrement the value of letter in freq map
      map.set(rLetter, map.get(rLetter) - 1);
      //if freq of letter gets to 0, decrement the count
      if (map.get(rLetter) === 0) {
        count--;
      }
    }
    right++;

    /* STEP 3: WE HAVE FOUND VALID SUBSTRINGS, THE GOAL NOW IS TO RETURN THE SHORTEST ONE. */
    while (count === 0) {
      if (right - left < len) {
        //update len and minWindow (slice from left up to, but not including right)
        len = right - left;
        minWindow = s.slice(left, right);
      }

      /* STEP 4: SLIDE LEFT WINDOW FORWARD TO CONTINUE TO CHECK FOR SHORTEST SUBSTRING */
      let lLetter = s[left];
      if (map.has(lLetter)) {
        map.set(lLetter, map.get(lLetter) + 1);
        if (map.get(lLetter) > 0) {
          count++;
        }
        left++;
      }
    }
  }
  return minWindow;
}

//Steps
//set left, right pointers
//set len as our substring length
//set count that will keep track of the size of the map
//set map to set frequencies of t letters
// set minWindow to hold our result string

//iterate over t
//if map doesnt have t, set letters and their freq

//iterate through s, starting at the right pointer
//if letter at right pointer is a key in the map decrement the freq of that letter in the map
//CHECK IF FREQ COUNT IS ZER0
//decrement the count
//increment the right to check next letter

//iterate as long as count is 0
//if the difference in our right and left pointer values is less than the len of our previous substring
//update the length of the previous substring
//update the minWindow by slicing the indices of the left and right pointers

//if letter at left pointer is a key in the map
//increment the freq of that letter in the map
//CHECK IF FREQ COUNT IS GREATER THAN ZER0
//increment the count
//increment the left to check next letter

//return minWindow

//*************** ALTERNATIVE ******************//

//Time: O(n + m) | Space: O(n)
var minWindow = function (s, t) {
  if (t.length > s.length) return "";

  const neededChars = {};

  for (let char of t) {
    neededChars[char] = (neededChars[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let neededLength = Object.keys(neededChars).length;
  let substring = "";

  while (right < s.length) {
    const rightChar = s[right];
    neededChars[rightChar]--;
    if (neededChars[rightChar] === 0) neededLength--;

    while (neededLength === 0) {
      if (!substring || substring.length > right - left + 1) {
        substring = s.slice(left, right + 1);
      }

      const leftChar = s[left];
      // If the leftChar in charMap is at exactly 0 before being
      // incremented, we now need more leftChars so that its count
      // in charMap goes down to exactly 0
      if (neededChars[leftChar] === 0) {
        neededLength++;
      }
      neededChars[leftChar]++;
      left++;
    }

    right++;
  }

  return substring;
};
