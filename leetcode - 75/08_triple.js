

var increasingTriplet = function(nums) {
    let smallest = Infinity
    let secondSmallest = Infinity
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= smallest) {
            smallest = nums[i]
        }else if (nums[i] <= secondSmallest) {
            secondSmallest = nums[i]
        } else {
            return true
        }        
    }

    return false
};