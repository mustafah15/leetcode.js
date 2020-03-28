/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length == 0) {
        return 0;
    }
    
    let globalMax = 0;
    let globalMin = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
      globalMin = Math.min(globalMin, prices[i]);
      globalMax = Math.max(globalMax, prices[i] - globalMin);
    }

    return globalMax;
};
