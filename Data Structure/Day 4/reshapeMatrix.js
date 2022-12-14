/*
566. Reshape the Matrix
Link: https://leetcode.com/problems/reshape-the-matrix/

Description:
    In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.
    You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
    The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
    If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:
    Input: mat = [[1,2],[3,4]], r = 1, c = 4
    Output: [[1,2,3,4]]
    
Example 2:
    Input: mat = [[1,2],[3,4]], r = 2, c = 4
    Output: [[1,2],[3,4]]

Constraints:
    m == mat.length
    n == mat[i].length
    1 <= m, n <= 100
    -1000 <= mat[i][j] <= 1000
    1 <= r, c <= 300
*/

// Using Array.prototype.flat() method:

var matrixReshape = function(mat, r, c) {
    if (mat.length * mat[0].length !== r * c) return mat;
    const result = [];
    const newRow = [];
    
    const flatArray = mat.flat();
    for (let item of flatArray){
        newRow.push(item)
        if (newRow.length === c) {
            result.push([...newRow]);
            newRow.length = 0;
        }
    }
    return result;
};

// If Array.prototype.flat() is not supported

const flatten = arr => {
    const flat = [];
    const helper = (inputArray) => {
        for (let i = 0; i < inputArray.length; i++) {
            if (Array.isArray(inputArray[i])) helper(inputArray[i]);  
			else result.push(inputArray[i]);
        }
    }
    helper(arr)
    return flat;
}

var matrixReshapeTwo = function(mat, r, c) {
    if (mat.length * mat[0].length !== r * c) return mat;
    const result = [];
    const newRow = [];
    
    const flatArray = flatten(mat);
    for (let item of flatArray){
        newRow.push(item)
        if (newRow.length === c) {
            result.push([...newRow]);
            newRow.length = 0;
        }
    }
    return result;
};