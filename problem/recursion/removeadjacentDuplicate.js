


function removeAdjDup(string) {
    let result = ''

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== string[ i + 1]  ) {
          result += string[i]  
        }
    }
    return result
}


console.log(removeAdjDup("hello"));

function recursiveRemoveAdjDuplicate(string) {
    if (string.length <= 1) {
        return string;
    }
    let nextString = recursiveRemoveAdjDuplicate(string.substring(1));

    if (string[0] === nextString[0]) {
        return nextString;
    }
    return string[0] + nextString;
}

console.log(recursiveRemoveAdjDuplicate("helloo"));