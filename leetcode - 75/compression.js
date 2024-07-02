

var compress = function(chars) {
    let index = 0
    let i = 0
    
    while (i < chars.length) {
        let j = i;
        while (j < chars.length && chars[j] === chars[i]) {
            j++
        }

        let count = j - i
        chars[index] = chars[i]
        index++

        if (count > 1) {
            for (const str of count.toString()) {
                chars[index] = str
                index++
            }
        }
        i = j
    }

    return index
};