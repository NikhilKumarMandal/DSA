


function firstOcc(arr, findMe, currentIndex) {
    
    while (currentIndex < arr.length) {
        if (arr[currentIndex]  == findMe) {
            return currentIndex
        }
    }
    return -1
}

function recusriveFirstOcc(arr, currIndex, findMe) {

    if (currIndex === arr.length) {
        return -1
    }

    if (arr[currIndex] == findMe) {
        return currIndex
    }

    return recusriveFirstOcc(arr,currIndex + 1, findMe)
}

