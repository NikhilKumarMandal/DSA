

var maxArea = function (height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length -1;

    while (left < right) {
        let currentHeight = Math.min(height[left], height[right]);
        let currentWidth = right - left;

        let currentArea = currentHeight * currentWidth

        maxWater = Math.max(maxWater, currentArea)
        
        // move the pointer
        if (height[left] < height[right]) {
            left ++
        } else {
            right--
        }
    }
    return maxWater
}