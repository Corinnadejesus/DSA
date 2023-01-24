/*
A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

Return a list of transactions that are possibly invalid. You may return the answer in any order.

Example 2:
Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
Output: ["alice,50,1200,mtv"]

Example 3:
Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
Output: ["bob,50,1200,mtv"]

Time: O(n^2) | Space: O(n)
*/

var invalidTransactions = function (transactions) {
  const invalid = new Set();
  const info = [];

  // create info arr: each element contains an obj with name, time, price, city, & the raw string of input
  for (let trans of transactions) {
    let [name, time, price, city] = trans.split(",");
    info.push({ name, time, price, city, raw: trans });
  }

  // sort ascending times
  info.sort((a, b) => Number(a.time) - Number(b.time));

  // add to invalid if price > 1000
  for (let infoEl of info) {
    if (infoEl.price > 1000) {
      invalid.add(infoEl.raw);
    }
  }

  //iterate over info array and compare two elements at every iteration
  for (let i = 0; i < info.length - 1; i++) {
    let curr = info[i];
    let nextI = i + 1;

    //while the elements are within bounds and less than 60
    while (nextI < info.length && info[nextI].time - curr.time <= 60) {
      //as long as the names are the same and the cities are different
      if (curr.name === info[nextI].name && curr.city !== info[nextI].city) {
        //push both raw invalid pairs into array
        invalid.add(curr.raw);
        invalid.add(info[nextI].raw);
      }
      //continue to check next indices
      nextI++;
    }
  }
  return Array.from(invalid);
};
