

var productExceptSelf = function(nums) {
    const length = nums.length;
    let left = new Array(length).fill(1);
    let right = new Array(length).fill(1);
    let answer = new Array(length);

    // Fill left array
    for (let i = 1; i < length; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }

    // Fill right array
    for (let i = length - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }

    // Construct the answer array
    for (let i = 0; i < length; i++) {
        answer[i] = left[i] * right[i];
    }

    return answer;
};