var summaryRanges = function(array) {
    if (array.length === 0){
        return []
    }

    let consecutiveGroups = [];
    let currentGroup = [array[0]];

    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1] + 1) {
            currentGroup[1] = array[i];
        } else {
            consecutiveGroups.push(currentGroup.join("->"));
            currentGroup = [array[i]];
        }
    }

    consecutiveGroups.push(currentGroup.join("->"));
    return consecutiveGroups;
};