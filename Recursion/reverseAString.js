


const recursionReverseString = (string) => {
    
    if (string === '') {
        return string
    }

    let reverse = recursionReverseString(string.substring(0, string.length - 1))
    
    let result = string[string.length - 1] + reverse

    // console.log(`Reversing: Last char: ${string[string.length- 1]} added in front of ${reverse} to form a result: ${result}`)

    return result
}

recursionReverseString("nikhil")