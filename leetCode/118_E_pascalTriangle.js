// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//   [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 
var generate = function(numRows) {
    if(numRows == 0) return [];
    
    var triangle = [];
    
    for(var i = 0; i < numRows; i++) {
        var newRow = [];
        
        for(var j = 0; j <= i; j++) {
            if(j == 0 || j == i) {
                newRow.push(1);
            } else {
                var prevRow = triangle[i - 1];
                
                newRow.push(prevRow[j - 1] + prevRow[j]);
            }
        }
        
        triangle.push(newRow);
    }
    
    return triangle;
};