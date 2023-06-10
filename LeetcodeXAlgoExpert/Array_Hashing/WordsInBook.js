/*
Given a book of pages with words on each page, return two things:

1.A collection of words with an array of their correspoundng pages.
2.Words that are shared within different pages

Input: ['this is a sample sample problem', 'book is great sample']
Output:
this: [1]
is: [1, 2]
a: [1]
sample: [1, 2]
problem: [1]
book: [2]
great: [2]

Time: O(n -> pages * m -> words per page)
Space: O(n)
*/

function bookPages(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    let page = arr[i].split(" ");
    for (let word of page) {
      if (!map[word]) {
        //if word doesn't exist at all in map, init arr with page found
        map[word] = [i + 1];
      } else if (map[word][map[word].length - 1] === i + 1) {
        //if word exist on the same page, skip
        continue;
      } else {
        //if word exist but on a different page, add its page to arr
        map[word].push(i + 1);
      }
    }
  }

  return map;
}
