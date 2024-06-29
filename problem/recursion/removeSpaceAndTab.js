


function removeTabAndSpace(string) {
    
    let result = '';
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        if (char !== ' ' && char !== '\t') {
             result += char;
        }
    }
    return result
}


function recursiveRemoveTabAndSpace(string) {
    
    if (string.length === 0) {
        return ''
    }

    let firstPart = string[0]
    let restOfThePart = string.slice(1)

    if (firstPart === '' || firstPart === '\t') {
        return recursiveRemoveTabAndSpace(restOfThePart)
    }

    return firstPart + recursiveRemoveTabAndSpace(restOfThePart)
}