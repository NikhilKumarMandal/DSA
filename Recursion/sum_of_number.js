

function sumOfNumbers(num) {
    if (num === 1) {
        return 1
    }

    return num + sumOfNumbers(num-1)
} 

console.log(sumOfNumbers(5));