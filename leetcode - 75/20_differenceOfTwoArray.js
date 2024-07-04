

// var findDifference = function(nums1, nums2) {
   
//     const set1 = new Set(nums1)
//     const set2 = new Set(nums2)

//     const result1 = [...set1].filter(x => !set2.has(x))
//     const result2 = [...set2].filter(x => !set1.has(x))

//     return  [result1,result2]
// };

// nums1 = [1, 2, 3], nums2 = [2, 4, 6]

// console.log(findDifference(nums1,nums2));

var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    const result1 = [];
    const result2 = [];

    // Find elements in nums1 that are not in nums2
    for (let i = 0; i < nums1.length; i++) {
        if (!set2.has(nums1[i])) {
            result1.push(nums1[i]);
        }
    }

    // Find elements in nums2 that are not in nums1
    for (let i = 0; i < nums2.length; i++) {
        if (!set1.has(nums2[i])) {
            result2.push(nums2[i]);
        }
    }

    return [result1, result2];
};