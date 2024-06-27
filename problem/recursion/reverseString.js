



// itrative

function reverseString(string) {
    let reverse = '';
    let length = string.length - 1;

    while (length >= 0) {
        reverse = reverse + string[length]
        length = length - 1;
    }

    return reverse

}

// console.log(reverseString("Hello"));

//recusrive

function recursiveReverseString(string) {
    console.log(`current string : ${string}`);
    if (string === '') {
        return ''
    }


    const reverseString = recursiveReverseString(string.substring(0, string.length - 1))
    
    const result = string[string.length - 1] + reverseString

    console.log(`Last char : ${string[string.length - 1]} added  in front of ${reverseString} to from a result : ${result}`);

    return result
    
    
}

console.log(recursiveReverseString('hello'));