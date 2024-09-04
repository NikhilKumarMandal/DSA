
// const arr = [1, 2, 3, 5, 6];
function insertDataInSortedArr(arr, num) {
    let length = arr.length;
    let i = length - 1;

    while (i >= 0 && arr[i] > num) {
        arr[i + 1] = arr[i];
        i--;
    }
    arr[i + 1] = num;
    length++;

    return arr;
}

// console.log(insertDataInSortedArr(arr, 4));


const arr = [1, -2, 4, 5, -3, 6, 65, 7, -8]

function arrange(arr)
{
    let i = 0; 
    let j = arr.length - 1;

    while (i < j) {
        while (arr[i] < 0) i++;
        while (arr[j] > 0) j--;

        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    return arr;
}

console.log(arrange(arr));

