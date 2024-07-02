

var reverseVowels = function(s) {
    const vowel = 'aeiouAEIOU'
    let char = s.split('');

    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        
    while (left < right && vowel.indexOf(char[left]) === -1) {
        left++        
    }
     
    while (left < right && vowel.indexOf(char[right]) === -1) {
        right--
    }

    if (left < right) {
        const temp = char[left]
        char[left] = char[right]
        char[right] = temp

        left++
        right--
    }
    }

    return char.join('')
};