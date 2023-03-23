//At most one transaction is allowed Time Complexity: O(N) Auxiliary Space: O(1)
export default function maxProfit(prices) {
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

