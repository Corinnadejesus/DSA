/*
Given an array of strings words and an integer k, return the k most frequent strings.
Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

Time: O(n * log n) | Space: O(n)
*/

var topKFrequent = function (words, k) {
  let map = {};

  for (let word of words) {
    map[word] = (map[word] || 0) + 1;
  }

  // O(n * log n) where n is number of words
  let sorted = Object.keys(map).sort((a, b) => {
    if (map[a] == map[b]) {
      return a > b ? 1 : -1;
    } else {
      return map[b] - map[a];
    }
  });

  return sorted.slice(0, k);
};
