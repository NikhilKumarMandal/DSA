

var largestAltitude = function(gain) {
    currentAltitude = 0;
    maxAltitude = 0;

    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i]
        
        maxAltitude = Math.max(currentAltitude,maxAltitude)    
    }

    return maxAltitude
};