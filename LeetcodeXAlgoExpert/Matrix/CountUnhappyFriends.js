/*
You are given a list of preferences for n friends, where n is always even.

For each person i, preferences[i] contains a list of friends sorted in the order of preference. In other words, a friend earlier in the list is more preferred than a friend later in the list. Friends in each list are denoted by integers from 0 to n-1.

All the friends are divided into pairs. The pairings are given in a list pairs, where pairs[i] = [xi, yi] denotes xi is paired with yi and yi is paired with xi.

However, this pairing may cause some of the friends to be unhappy. A friend x is unhappy if x is paired with y and there exists a friend u who is paired with v but:

x prefers u over y, and
u prefers x over v.
Return the number of unhappy friends.

Example 1:
Input: n = 4, preferences = [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], pairs = [[0, 1], [2, 3]]
Output: 2
Explanation:
Friend 1 is unhappy because:
- 1 is paired with 0 but prefers 3 over 0, and
- 3 prefers 1 over 2.
Friend 3 is unhappy because:
- 3 is paired with 2 but prefers 1 over 2, and
- 1 prefers 3 over 0.
Friends 0 and 2 are happy.

Example 2:
Input: n = 2, preferences = [[1], [0]], pairs = [[1, 0]]
Output: 0
Explanation: Both friends 0 and 1 are happy.

Time: O(n^2) | Space: O(1)
*/

var unhappyFriends = function (n, preferences, pairs) {
  let happyMap = new Array(n);

  //for each person find out and record index of who they are paired up with
  //[0,2,0,1]
  //0 prefers 1 first so the index is 0
  //1 prefers 0 third so the index is 2
  //2 prefers 3 first so the index is 0
  //3 prefers 2 second so the index is 1
  for (let [i, j] of pairs) {
    happyMap[i] = preferences[i].indexOf(j);
    happyMap[j] = preferences[j].indexOf(i);
  }

  let unhappy = 0;

  //for each person
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < happyMap[i]; j++) {
      //check to see if this partner also prefers them before who they are paired up with
      //for example 1 prefers [3,2] before 0 -> [3,2,0]
      let partner = preferences[i][j];
      //check 3's preferences [1,2,0]
      if (preferences[partner].indexOf(i) < happyMap[partner]) {
        //notice that 3 prefers 1 before its own pair which is 2
        //add to the unhappy variable and also break because once a person is you dont want to count an unhappy                     person twice (unique unhappy person)
        unhappy++;
        break;
      }
    }
  }

  return unhappy;
};
