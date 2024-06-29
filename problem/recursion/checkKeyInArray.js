


function array(arr, key) {
    
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            count++
        }   
    }

    return count
}
let hello = [1,2,3,4,2,2,2]
console.log(array(hello, 2));


function recurive(arr, key, index = 0) {
    if (index >= arr.length) {
        return 0
    }

    if (arr[index]  === key) {
        return 1 + recurive(arr,key,index+ 1)
    } else {
        return recurive(arr,key,index+ 1)
    }
}

console.log(recurive(hello,2));