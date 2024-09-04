// function isPrimeNumber(number) {
//     for (let i = 2; i * i <= number; i++) {
//         if (number % i === 0) return false
//     }
//     return true
// }


// console.log(isPrimeNumber(69) );
// console.log(isPrimeNumber(29) );
// console.log(isPrimeNumber(79) );
// console.log(isPrimeNumber(24) );




// let num = 32344;

// let length = 0
// while (num > 0) {
//     let hello = num % 10
//     console.log(hello);
//     num = Math.floor(num / 10);
//     length++
    
// }
// console.log(length);


// let num = 121;
// let result = ''

// while (num > 0) {
//     const last = num % 10
//     result += last
//     num = Math.floor(num / 10)
// }

// console.log(result);


// function vowelsAndConsonants(string) {
//     const vowels = "aeiouAEIOU";
//     let vowelsCount = 0;
//     let consonantsCount = 0;

//     for (let i = 0; i < string.length; i++) {
//         let char = string[i];
//         if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
//             let isVowel = false;
//             for (let j = 0; j < vowels.length; j++) {
//                 if (char === vowels[j]) {
//                     isVowel = true;
//                     break;
//                 }
//             }
//             if (isVowel) {
//                 vowelsCount++;
//             } else {
//                 consonantsCount++;
//             }
//         }
//     }

//     return { vowelsCount, consonantsCount };
// }

// function vowelAndConsonant(str) {
//     let vowels = new Set(arr)
//     const arr = ['a','e','i','o','u','A','E','I','O','U']
//     let vowelCount = 0;
//     let consonantsCount = 0;

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i]

//         if ((char >= 'A'&& char <= 'Z') || (char >= 'a' && char <='z')) {
//             if (vowels.has(char))
//                 vowelCount++
//         } else {
//             consonantsCount++
//         }
//     }

//     return {vowelCount,consonantsCount}
// }
// let hello = vowelsAndConsonants("hello");
// console.log( hello.vowelsCount);
// console.log(hello.consonantsCount);

// function convert(str) {
//   let result = '';

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//      const ascii = char.charCodeAt(0);

//     if (ascii >= 65 && ascii <= 90) {
//       result += String.fromCharCode(ascii + 32);
//     } else if (ascii >= 97 && ascii <= 122) {
//       result += String.fromCharCode(ascii - 32);
//     } else {
//       result += char;
//     }
//   }
  
//   return result;
// }


// // palindrome

// let str1 = 'hello'
// let str = ''

// for (let i = str1.length -1; i >= 0 ; i--) {
//     str += str1[i]
// }

// console.log(str);

// if (str1 === str) {
//     console.log(`palindrome`);
// } else {
//     console.log(` not a palindrome`);
// }

// // anagram

// let str2 = 'hello';
// let str3 = 'olleh';

// let str4 = '';
// let str5 = '';

// for (let i = 0; i < str2.length; i++) {
//     if (str2[i] !== ' ') {
//         str4 += str2[i];
//     }
// }


// for (let i = 0; i < str3.length; i++) {
//     if (str3[i] !== ' ') {
//         str5 += str3[i];
//     }
// }


// str4 = str4.toLowerCase();
// str5 = str5.toLowerCase();

// let result = [];
// for (let i = 0; i < str4.length; i++) {
//     result.push(str4[i]);
// }
// result.sort();
// str4 = result.join('');


// let result1 = [];
// for (let i = 0; i < str5.length; i++) {
//     result1.push(str5[i]);
// }
// result1.sort();
// str5 = result1.join('');

// let isAnagram = str4 === str5;
// console.log(isAnagram);

  

// // Question 1: Find the Second Largest ElementProblem Statement: Write a function that takes an array of integers and returns the second largest element in the array. If there is no second largest element (i.e., the array contains less than two distinct elements), return -1.



// const arr = [1, 2, 3, -4, 5, 6]

//     if (arr.length < 2) return -1;

//     let firstLargest = -Infinity;//1 2
//     let secondLargest = -Infinity;//1 2

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstLargest) {
//         secondLargest = firstLargest;
//         firstLargest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
//         secondLargest = arr[i];
//     }
// }
    

// if (secondLargest === -Infinity) {
//     return -1
// } else {
//     console.log(secondLargest);
    
// }



// // Question 2: Remove Duplicates from Sorted ArrayProblem Statement: Given a sorted array, remove the duplicates in-place such that each element appears only once and return the new length. Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.


// let arr1 = [1, 2, 3, 5, 6, 6]

// function removeDuplicates(arr) {
//     if (arr.length === 0) return 0;

//     let j = 0;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] !== arr[j]) {
//             j++;
//             arr[j] = arr[i];
//         }
//     }
//     return j + 1;
// }

// console.log(removeDuplicates(arr1));






// // User function Template for javascript
// // User function Template for javascript

// /**
//  * @param {number[]} arr
//  * @param {number} n
//  * @returns {number[]}
//  */

// class Solution {
//     getMinMax(arr) {
//         let max = -Infinity;
//         let min = Infinity;

//         for (let i = 0; i <= arr.length; i++){
//             if (arr[i] > max) {
//                 max = arr[i];
//             }
//             if (arr[i] < min) {
//                 min = arr[i];
//             }
//         }
//         return {max,min}
//     }
// }

// // const solution = new Solution();
// // const result12 = solution.getMinMax([56789]);
// // console.log(result12.min, result12.max);

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findPeakElement = function(nums) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left < right) {
//         let mid = Math.floor((left + right) / 2);
//         if (nums[mid] > nums[mid + 1]) {
//             right = mid;
//         } else {
//             left = mid + 1;
//         }
//     }

//     return left;
// };


// function product(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             let res = arr[i] * arr[j]
//             result.push(res)
//         }
//     }

//     return result
// }
// let arr12 = [1, 2, 3, 4]
// console.log(product(arr12));




/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const mySet = new Set()

    for (let i = 0; i < nums.length; i++) {
       if (mySet.has(nums[i])) {
            return true
        } 
       
    }

    return false
};



/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity; 
    let currentSum = 0;      

    for (let num of nums) {
        currentSum += num;    
        
        if (currentSum > maxSum) {
            maxSum = currentSum; 
        }
        
        if (currentSum < 0) {
            currentSum = 0;   
        }
    }

    return maxSum;
};




/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minValue = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minValue) {
            minValue = prices[i];
        } else if (prices[i] - minValue > maxProfit) {
            maxProfit = prices[i] - minValue;
        }
    }

    return maxProfit;
};


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};



/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
    console.log(array[i][j])
    }
    }
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let h = nums.length - 1;
    
    while (l <= h) {
        let mid = Math.floor((l + h) / 2)

        if (target === nums[mid] ) {
            return mid
        } else if (target < nums[mid]) {
            h = mid - 1;
        } else {
            l = mid + 1
        }
    }
    return -1
};