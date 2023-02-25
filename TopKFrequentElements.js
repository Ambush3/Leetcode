function topKFrequent(nums, k) {
    let freqDict = {};
    for (let num of nums) {
        if (num in freqDict) {
            freqDict[num]++;
        } else {
            freqDict[num] = 1;
        }
    }

    let sortedDict = Object.entries(freqDict).sort((a, b) => b[1] - a[1]);
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(parseInt(sortedDict[i][0]));
    }
    return result;
}