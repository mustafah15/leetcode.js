/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let cacheArray = triangle[triangle.length - 1];
    
    for(let level = triangle.length - 2; level >= 0; level--) {
        const currentLayer = triangle[level];
        for(let item = 0; item < triangle[level].length; item++) {
            let minSumGoingLeft = cacheArray[item];
            let minSumGoingRight = cacheArray[item + 1];
            
            let minSumDirection = Math.min(minSumGoingLeft, minSumGoingRight);
            let thisCellsValue = currentLayer[item];

            cacheArray[item] = minSumDirection + thisCellsValue;
        }
    }
    
    return cacheArray[0];
};
