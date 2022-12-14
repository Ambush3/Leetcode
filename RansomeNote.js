function canConstruct(note, magazine) {
    var mag = {};
    for (var i = 0; i < magazine.length; i++) {
        if (mag[magazine[i]] == undefined) {
            mag[magazine[i]] = 1;
        } else {
            mag[magazine[i]]++;
        }
    }
    for (var i = 0; i < note.length; i++) {
        if (mag[note[i]] == undefined || mag[note[i]] == 0) {
            return false;
        } else {
            mag[note[i]]--;
        }
    }
    return true;
};