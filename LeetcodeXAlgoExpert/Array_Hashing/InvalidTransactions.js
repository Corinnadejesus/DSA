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

const isInvalid = (transaction, map) => {
  const [name, time, amount, city] = transaction.split(",");

  if (amount > 1000) return true;

  const prevTrans = map[name];

  for (const trans of prevTrans) {
    if (city !== trans.city && Math.abs(time - trans.time) <= 60) return true;
  }

  return false;
};

var invalidTransactions = function (transactions) {
  const invalid = [];
  const map = {};

  for (const trans of transactions) {
    const [name, time, city] = trans.split(",");

    if (name in map) {
      //alice: [ { time: '20', city: 'mtv' }, { time: '50', city: 'beijing' } ]
      map[name].push({ time, city });
    } else {
      //{ alice: [ { time: '20', city: 'mtv' } ] }
      map[name] = [{ time, city }];
    }
  }

  for (const trans of transactions) {
    if (isInvalid(trans, map)) invalid.push(trans);
  }

  return invalid;
};
