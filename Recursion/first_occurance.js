

function first_ocurrance(arr, currIndex, findMe) {
    while (currIndex < arr.length) {
        if (arr[currIndex] === findMe) {
            return currIndex
        }
        currIndex = currIndex + 1
    }
    return -1
}
arr = [1,2,3,4,5]
// console.log(first_ocurrance(arr, 0, 3));

function recursionFirstOcurrance(arr, currIndex, findMe) {
    
    if (currIndex === arr.length) {
        return -1
    }

    if (arr[currIndex] === findMe) {
        return currIndex
    }
    return recursionFirstOcurrance(arr,currIndex + 1,findMe)
}

console.log(recursionFirstOcurrance(arr,0,3));