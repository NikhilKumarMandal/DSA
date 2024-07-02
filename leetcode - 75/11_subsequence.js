


var isSubsequence = function(s, t) {
    let sIndex = 0;

    for (let i = 0; i < t.length; i++) {
        if (sIndex === s.length) break;
        if (s[sIndex] === t[i]) sIndex++; 
    }

    return sIndex === s.length
};