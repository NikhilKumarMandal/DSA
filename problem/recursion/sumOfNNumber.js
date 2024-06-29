


function sumOfN_Number(num) {
    

    if (num === 1) {
        return num
    }
    return num + sumOfN_Number( num - 1 )
}

console.log(sumOfN_Number(5));