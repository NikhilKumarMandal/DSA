

function power(base, expo) {

    if (expo == 0) {
        return 1
    }
    
    return base * power(base,expo -1)
}

console.log(power(2,4));