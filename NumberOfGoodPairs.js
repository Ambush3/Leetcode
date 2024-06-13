var numIdenticalPairs = function(nums) {
    const count = {}
    
    nums.forEach(num => {
        if (count[num]) {
            count[num]++
        } else {
            count[num] = 1
        }
    })

    let goodPairs = 0
    Object.values(count).forEach(n => {
        goodPairs += n * (n - 1) / 2
    })

    return goodPairs
};

