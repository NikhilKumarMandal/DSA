

var maxVowels = function(s, k) {
    const set = new Set(['a', 'e', 'i', 'o', 'u'])
    
    let currentString = 0 
    let maxVowel = 0
    
    if (k > s.length) return 0;

    for (let i = 0; i < k; i++) {
        if (set.has(s[i])) currentString++
    }
    maxVowel = currentString
    for (let i = k; i < s.length; i++) {
        if (set.has(s[i])) currentString++
        if (set.has(s[i-k])) currentString--
        maxVowel = Math.max(maxVowel,currentString)
    }
    return maxVowel
};