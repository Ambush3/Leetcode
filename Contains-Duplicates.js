function containsDuplicate(arr) {
    let numsMap = {}
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (numsMap[num]) {
            return true
        } else {
            numsMap[num] = true
        }
    }
    return false
};