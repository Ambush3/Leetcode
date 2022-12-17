function matrixReshape(mat, r, c) {
    if (r * c !== mat.length * mat[0].length) { // if the new dimensions are not the same as the old dimensions return the original matrix
        return mat
    }
    let row = [] // create a new array to hold the new matrix
    return mat.reduce((res, items) => { // reduce the original matrix into a single array
        items.forEach((num) => { // iterate through the array and push each number into the new array
            row.push(num) // push the number into the new array
            if (row.length === c) { //
                res.push(row) // push the new array into the new matrix
                row = [] // reset the new array
            }
        })
        return res // return the new matrix
    }, []) // set the initial value of the new matrix to an empty array
}