

// var maxOperations = function(nums, k) {
//     nums.sort((a, b) => a - b)
    
//     let left = 0;
//     let right = nums.length - 1;
//     let operations = 0;

//     while (left < right) {
//         const sum = nums[left] + nums[right]
//         if (sum === k) {
//             operations++
//             left++
//             right++
//         }else if (sum < k) {
//             left++
//         } else {
//             right++
//         }
//     }

//     return operations
// };

// method 2

var maxOperations = function (nums, k) {
    
    // k = 10;
    // num = 2
    // compliment = k - num = 8

    let map = new Map()
    let operations = 0;

    for (const num of nums) {
        let compliment = k - num
        if (map.get(compliment) > 0 ) {
            operations++ 
            map.set(compliment, map.get(compliment) - 1)     
        } else {
            map.set(num,(map.get(num) || 0) + 1)
        }
    }
    return operations
};