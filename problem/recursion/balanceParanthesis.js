


function balance_Paranthesis(arr, startIndex = 0, currentIndex = 0) {
    
    if (startIndex === arr.length) {
        return currentIndex === 0;
    }

    if (currentIndex < 0) {
        return false
    }

    if (currentIndex === '(') {
        return balance_Paranthesis(arr,startIndex + 1,currentIndex + 1)
    } else if (currentIndex === ')') {
        return balance_Paranthesis(arr,startIndex + 1,currentIndex -1)
    } else {
        return balance_Paranthesis(arr, startIndex + 1, currentIndex);
    }
}

let arr = ['(', '(', ')', '(', ')', ')'];
console.log(balance_Paranthesis(arr));


function balanceParanthesis(arr, startIndex = 0, currentIndex = []) {
    
    if (startIndex === arr.length) {
        return currentIndex.length === 0;
    }

    let currentChar = arr[startIndex]
    
    if (currentChar === '(' || currentChar === '[' || currentChar === '{') {
        currentIndex.push(currentChar)
    } else if( currentChar === ')' || currentChar === '}' ||  currentChar === ']') {
        let last = currentIndex.pop()
        if (!last || !matches(last ,currentChar)) {
            return false
        }
    }


    return balanceParanthesis(arr,startIndex + 1,currentIndex)

}

function matches(open, close) {
    return (open === '(' && close === ')') || (open = '[' && close === ']')  || (open === '{' && '}')
};

let arr1 = ['(', '[', ']', '(', ')', ')'];
console.log(balanceParanthesis(arr1));