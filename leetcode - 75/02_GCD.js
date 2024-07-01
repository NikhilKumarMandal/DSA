

// var gcdOfStrings = function(str1, str2) {
//     let a = 'ABCABCABCABC'
//     let b = 'ABCABCABC'

//     let result = a.slice(0, a.length % b.length)
//     console.log(a.length % b.length);
//     console.log(result);
// };

// gcdOfStrings()

var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return ""; 
    }

    function gcd(a, b) {
        if (b.length === 0) {
            return a
        }
        // gcd(a,b) => gcd(a,b-a)
        return gcd(a, b.slice(0,b.length % a.length) )
    }
    
    return gcd(str1,str2)
};

