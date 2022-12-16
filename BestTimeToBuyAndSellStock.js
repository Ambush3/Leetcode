// return max profit you can achieve from the given array of stock prices

function maxProfit (prices){
    let maxProfit = 0; // initialize maxProfit to 0
    for (let i = 0; i < prices.length; i++) { // iterate through prices array
        for (let j = i + 1; j < prices.length; j++) { // iterate through prices array again
            if (prices[j] - prices[i] > maxProfit) { // if the difference between the current price and the next price is greater than the maxProfit, set maxProfit to the difference
                maxProfit = prices[j] - prices[i]; // set maxProfit to the difference
            }
        }
    }
    return maxProfit; // return maxProfit
}