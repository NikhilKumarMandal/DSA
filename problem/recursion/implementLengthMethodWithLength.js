


function lenngth(string) {
    let count = 0;

    while (string[count] !== undefined) {
        count++
    }
    return count;
}
 

console.log(lenngth("Hello"));


function recurive(string) {
    if (string === '') {
        return 0
    }

    return 1 + recurive(string.substring(1))
}


console.log(recurive("hello00"));