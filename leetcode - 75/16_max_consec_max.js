

var longestOnes = function(nums, k) {
    let left = 0;
    let countZero = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) countZero++

        while (countZero > k) {
            if (nums[left] === 0) countZero--
            left++
        }

        maxLength = Math.max(maxLength,right-left+1)
    }
    return maxLength
};