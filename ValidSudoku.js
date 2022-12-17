// Determine if a 9 x 9 Sudoku board is valid.Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1 - 9 without repetition.
// Each column must contain the digits 1 - 9 without repetition.
// Each of the nine 3 x 3 sub - boxes of the grid must contain the digits 1 - 9 without repetition.

// A Sudoku board(partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

function isValidSudoku(board) {
    let row = new Set() // this is a set that will hold the numbers in each row
    let col = new Set() // this is a set that will hold the numbers in each column
    let box = new Set() // this is a set that will hold the numbers in each 3x3 box
    for (let i = 0; i < board.length; i++) { // iterate through the rows
        for (let j = 0; j < board[i].length; j++) { // iterate through the columns
            if (board[i][j] !== '.') { // if the current number is not a period
                if (row.has(board[i][j])) { // if the set already has the number return false
                    return false 
                } else {
                    row.add(board[i][j]) // if the set does not have the number add it to the set
                }
            }
            if (board[j][i] !== '.') { // if the current number is not a period
                if (col.has(board[j][i])) { // if the set already has the number return false
                    return false
                } else {
                    col.add(board[j][i]) // if the set does not have the number add it to the set
                }
            }
            let rowStart = 3 * Math.floor(i / 3) // this is the starting row of the 3x3 box
            let colStart = 3 * Math.floor(i % 3) // this is the starting column of the 3x3 box
            if (board[rowStart + Math.floor(j / 3)][colStart + j % 3] !== '.') { // if the current number is not a period
                if (box.has(board[rowStart + Math.floor(j / 3)][colStart + j % 3])) { // if the set already has the number  
                    return false // return false
                } else {
                    box.add(board[rowStart + Math.floor(j / 3)][colStart + j % 3]) // if the set does not have the number add it to the set
                }
            }
        }
        row.clear() // clear the sets for the next iteration
        col.clear()
        box.clear()
    }
    return true // if the board is valid return true
}