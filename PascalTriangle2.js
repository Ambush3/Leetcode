// Given a pascal triangle, return the row at the given index
// Example: pascal(4) -> [1, 4, 6, 4, 1]
// Example: pascal(5) -> [1, 5, 10, 10, 5, 1]

function getRow (rowIndex){
    let result = [1];
    for (let i = 1; i <= rowIndex; i++) {
        result[i] = result[i - 1] * (rowIndex - i + 1) / i;
    }
    return result;
}