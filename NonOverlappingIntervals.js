var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let count_remove = 0;
    let j = 0;
    for (let i = 1; i < intervals.length; i++) {
        let next_start_index = intervals[i][0];
        let next_end_index = intervals[i][1];
        let current_end = intervals[j][1];

        if (current_end > next_start_index) {
            count_remove++
            if (next_end_index < current_end) {
                j = i
            }
        } else {
            j = i
        }
    }
    return count_remove
};