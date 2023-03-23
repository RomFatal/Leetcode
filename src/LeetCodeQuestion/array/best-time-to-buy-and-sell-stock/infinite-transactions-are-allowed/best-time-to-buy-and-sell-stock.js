//Infinite transactions are allowed Time Complexity: O(N) Auxiliary Space: O(1)
// Function to find the maximum profit possible by buying
// and selling stocks any number of times
export default function maxProfit(prices)
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