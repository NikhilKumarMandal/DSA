


const recursionReverseString = (string) => {
    
    if (string === '') {
        return string
    }

    let reverse = recursionReverseString(string.substring(0, string.length - 1))
    console.log("helo",string[string.length - 1]);
    let result =  string[string.length - 1] + reverse

    // console.log(`Reversing: Last char: ${string[string.length- 1]} added in front of ${reverse} to form a result: ${result}`)

    return result
}

recursionReverseString("nikhil")


function reverseString(string) {
    
    let reverse = ""
    let length = string.length -1

    while (length >= 0) {
        reverse = reverse + string[length]
        length = length - 1
    }
    return reverse

    
}

// console.log(reverseString("nikhil"));