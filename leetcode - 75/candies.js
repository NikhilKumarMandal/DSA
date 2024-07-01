

// var kidsWithCandies = function(candies, extraCandies) {
    
//     const maxCandies = Math.max(...candies)

//     return candies.map(candy => candy + extraCandies >= maxCandies)
// };

var kidsWithCandies = function(candies, extraCandies) {
    
    let higest = candies[0]
    let arr = []

    for (let i = 1; i < candies.length; i++) {
        if (higest  < candies[i]) {
            higest = candies[i]
        }
    }

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= higest ) {
            arr.push(true)
        } else {
            arr.push(false)
        }
    }

    return arr
    
};


var kidsWithCandies = function(candies, extraCandies) {
    
    const n = candies.length
    let arr = []

    for (let i = 0; i < n; i++) {
        if (candies+ extraCandies >= Math.max(...candies)) {
            arr.push(true)
        } else {
            arr.push(false)
        }
    }

    return arr
    
};