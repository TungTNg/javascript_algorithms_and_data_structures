// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var resultArr = [];
    
    function dfs(leftRemaining, rightRemaining, string) {
        if(leftRemaining > rightRemaining) return; // Can't close a parenthese without opening one first
        
        if(leftRemaining == 0 && rightRemaining == 0) {
            resultArr.push(string);
        }
        
        if(leftRemaining > 0) dfs(leftRemaining - 1, rightRemaining, string + "(");
        if(rightRemaining > 0) dfs(leftRemaining, rightRemaining - 1, string + ")");
    }
    
    dfs(n, n, "");
    
    return resultArr;
};