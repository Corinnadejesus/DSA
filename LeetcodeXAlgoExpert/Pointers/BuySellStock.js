/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1] //EACH BUY PRICE IS GREATER THAN THE SELL PRICE
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Time: O(n) | Space: O(1)
*/

//As you go through the prices, at every iteration you should be asking: is this current price less than the minimum buying price. If it is not, we sell at current price to make a profit.

function buySellStock(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {

    //if current price is less than min price (which always will be because its infinity)
    if (price < minPrice) {

      //SET current price as new minimum price
      minPrice = price;
    } else {
      //get diff by calculating current buy price from the smallest buy price so far
      let diffInProfit = price - minPrice;
      
      maxProfit = Math.max(maxProfit, diffInProfit);
    }
  }
  return maxProfit;
}
