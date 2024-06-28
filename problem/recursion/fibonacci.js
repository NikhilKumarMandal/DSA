

function fibonacci(value) {
    n0 = 0
    n1 = 1

    
    for (let i = 0; i < value; i++) {
        temp = n0 + n1
        n0 = n1
        n1 = temp
    }
    return n0
}

// console.log(fibonacci(5));

function recursive(value) {
    
    if(value <= 1) {
        return value
    }

    return recursive(value - 1) + recursive(value -2)
}

console.log(recursive(5));