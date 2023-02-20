/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
*/

function characterReplacement(str, k) {
    let start = 0;
    let map = {};
    let maxFrequency = 0;
    let maxSubstringLength = 0;
    for (let end = 0; end < str.length; end += 1) {
        map[str[end]] = (map[str[end]] || 0) + 1

        // the maximum frequency we have seen in any window yet
        maxFrequency = Math.max(maxFrequency, map[str[end]]);

        // move the start pointer towards right if the current
        // window is invalid
        const validWindow = (end + 1 - start - maxFrequency <= k);
        if (!validWindow) {
            map[str[start]]--;
            start++;
        }

        // the window is valid at this point, store length
        // the size of the window never decreases
        maxSubstringLength = end + 1 - start;
    }
    return maxSubstringLength;
}

/*
    WALK-THROUGH EXAMPLE
    (if S - E <= K) increment maxFrequency, and window and continue

    [A, A, B, A, B, B, A] k = 2
     S  E (0 - 0 <= 2) maxFrequency: {'a': 2, 'b': 0}

    [A, A, B, A, B, B, A] k = 2
     S     E (0 - 2 <= 2) maxFrequency: {'a': 2, 'b': 1}

    [A, A, B, A, B, B, A] k = 2
     S        E (0 - 3 <= 2) FALSE, MOVE START POINTER FORWARD
    maxFrequency: {'a': 3, 'b': 1}

    [A, A, B, A, B, B, A] k = 2
        S     E (1 - 4 <= 2) FALSE, MOVE START POINTER FORWARD

    [A, A, B, A, B, B, A] k = 2
           S  E (2 - 3 <= 2) TRUE, MOVE END POINTER FORWARD
    maxFrequency: {'a': 3, 'b': 2}

    [A, A, B, A, B, B, A] k = 2
           S     E (2 - 4 <= 2) TRUE, MOVE END POINTER FORWARD

    [A, A, B, A, B, B, A] k = 2
           S        E (2 - 5 <= 2) FALSE, MOVE START POINTER FORWARD

    [A, A, B, A, B, B, A] k = 2
              S     E (3 - 5 <= 2)

    [A, A, B, A, B, B, A] k = 2
              S        E
    maxFrequency: {'a': 3, 'b': 3}
    */
