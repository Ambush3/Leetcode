var moveZeroes = function(nums) {
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] == 0){
            nums.splice(i,1);
            i=i-1;
            count++;
        };
    };
    for (let i = 0; i < count; i++){
        nums.push(0)
    }
};