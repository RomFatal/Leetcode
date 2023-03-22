//At most one transaction is allowed Time Complexity: O(N) Auxiliary Space: O(1)
function maxProfit1( prices)
{
    let buy = prices[0], max_profit = 0;
    let n = prices.length;
    for (let i = 1; i < n; i++) {
 
        // Checking for lower buy value
        if (buy > prices[i])
            buy = prices[i];
 
        // Checking for higher profit
        else if (prices[i] - buy > max_profit)
            max_profit = prices[i] - buy;
    }
    return max_profit;
}
 
// Driver Code
 
var prices= [20,2,13,1,4];
let max_profit = maxProfit1(prices);
console.log(max_profit);
     




// Function to find the maximum profit possible by buying
// and selling stocks any number of times
function maxProfit(prices)
{
    let n = prices.length;
    if (n < 2)
        return 0;
    let sellingDate = 0;
    let buyingDate = 0;
    let totalProfit = 0;
    for (let i = 1; i < n; i++) {
        if (prices[i] >= prices[i - 1])
            sellingDate++;
        else {
            totalProfit += (prices[sellingDate] - prices[buyingDate]);
            sellingDate = buyingDate = i;
        }
    }
    totalProfit += (prices[sellingDate] - prices[buyingDate]);
    return totalProfit;
}
 
// Driver Code
 
// Given prices
prices = [ 7, 1, 2, 10, 6, 18];
     
// Function Call to calculate maximum profit possible
let ans = maxProfit(prices);
     
// Print the total profit
console.log(ans);
     
