// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix.This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

function searchMatrix(matrix, target) {
    let row = 0
    let col = matrix[0].length - 1
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true
        } else if (matrix[row][col] > target) {
            col--
        } else {
            row++
        }
    }
    return false
}