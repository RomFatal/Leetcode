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

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let runningSum = [];
    runningSum[0] = nums[0];
    let tmp;
    for ( let i = 1; i < nums.length; i++){
        tmp = runningSum[i-1] + nums[i];
        runningSum.push(tmp);
    }
    return runningSum;
};

var runningSum = function(nums) {
    let sumArr=[nums[0]];
    let tmp;
    for(let i=1 ; i < nums.length ; i++)
    {
        tmp = nums[i] + sumArr[i-1];
        sumArr.push(tmp)
    }
    return sumArr;
};