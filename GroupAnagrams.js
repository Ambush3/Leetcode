var groupAnagrams = function (strs) {
    var anagrams = [];
    strs.forEach((el) => { // for each string in the array 
        key = el.split('').sort(); // sort the string and store it in key 
        anagrams[key] instanceof Array ? anagrams[key].push(el) : anagrams[key] = [el]; // if key is already present in anagrams, push the string to the array, else create a new array with the string as the first element
    });
    return Object.keys(anagrams).map(function (k) { return anagrams[k] }); // return the object as an array and map the keys to the values 
}