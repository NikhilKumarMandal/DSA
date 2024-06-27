



function countVowel(string) {
    
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (isVowel(string[i])) {
            count ++
        }  
    }

    return count
}

console.log(countVowel("hello"));

function isVowel(char) {
    const lowerChar = char.toLowerCase();
    const vowel = 'aeiou'

    if (vowel.indexOf(lowerChar) != -1) {
        return true
    } else {
        return false
    }
}


function recusriveVowelCount(string, stringLength) {
    
    if (stringLength == 1) {
        return Number(isVowel(string[0]))
    }

    return recusriveVowelCount(string,stringLength-1) + isVowel(string[stringLength - 1])
}