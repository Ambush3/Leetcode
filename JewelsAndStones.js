function numJewelsInStones(jewels, stones) {
    let stonesMap = 0
    for (let i = 0; i < jewels.length; i++) {
        for (let j = 0; j < stones.length; j++) {
            if (jewels[i] == stones[j]) {
                stonesMap++
            }
        }
    }
    return stonesMap
};

// hash map version
function numJewelsInStones(jewels, stones) {
    // create a map of jewels
    let jewelsMap = {}
    for (let i = 0; i < jewels.length; i++) {
        jewelsMap[jewels[i]] = true
    }

    // loop through stones and count number of jewels
    let stonesMap = 0
    for (let j = 0; j < stones.length; j++) {
        if (jewelsMap[stones[j]]) {
            stonesMap++
        }
    }
    return stonesMap
}