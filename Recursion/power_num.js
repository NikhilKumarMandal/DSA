

function calculatePower(num, exponent) {
    if (exponent === 0) {
        return 1;
    }

    return num * calculatePower(num, exponent - 1);
}

console.log(calculatePower(2, 5)); 

