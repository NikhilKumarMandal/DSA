

var longestSubarray = function(nums) {
  
    let left = 0;
    let zeroCount = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeroCount++
        
        while (zeroCount > 1) {
            if(nums[left] === 0) zeroCount--
            left++
        }

        if(zeroCount === 1) maxLength = Math.max(maxLength,right-left)
    }
    
    return zeroCount === 0 ? nums.length -1 : maxLength
};