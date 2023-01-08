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

Time | Space : O(n)
*/

//As you go through the prices, at every iteration you should be asking: is this current price less than the minimum buying price. If it is not, we sell at current price to make a profit.

function buySellStock(prices) {
  //set default as the highest price because first price will always be lower than infinity
  let minBuyPrice = Infinity
  //0 = no transactions yet
  let maxProfit = 0

  for(let price of prices) {
      if(price < minBuyPrice) {
          //replace min buy price with current stock
          minBuyPrice = price

      }

      //difference in profit
      const diffInProfit = price - minBuyPrice

      //Ex. $5 - $1 > 0
      if (diffInProfit > maxProfit) {
          //update profit with the difference
          maxProfit = diffInProfit
      }
  }
  return maxProfit;
}

//Further Explanation
//BUY LOW, SELL HIGH
  //set left and right pointers to start at first and second indexes
  //left (buy)
  //right (selling)
  //maxProfit (0 by default)

  //while our right has not passed the end of prices
  //is transaction profitable?
  //check if left buying price is less than the right selling price
  //calculate the profit we made (right - left)
  //update max profit

  //else
  //update left and right pointers
  //otherwise left buying is greater than right selling
  //set left buying pointer as the right selling pointer because it is lower in value
  //increment right selling pointer

  //at every iteration check if the left pointer is less than the right pointer then we made a profit
  //increment the right pointer to check for next value
  //only increment left pointer if we made a profit
