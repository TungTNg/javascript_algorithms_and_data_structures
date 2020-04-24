// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

// function longestCommonPrefix(strArr) {
//     if(strArr.length == 0) return ""; 
    
//     var prefix = strArr[0];
    
//     for(var str of strArr) {
//         for(var i = 0; i < prefix.length; i++) {
//             if(str[i] !== prefix[i]) {
//                 prefix = prefix.slice(0, i);
//             }
//         }
//     }
    
//     return prefix;
// }

function longestCommonPrefix(strArr) {
    var prefix = "";
    
    if(strArr == null || strArr.length == 0) return prefix; 
    
    var compareWord = strArr[0];
    
    for(var i = 0; i < compareWord.length; i++) {
        for(var j = 0; j < strArr.length; j++) {
            if(strArr[j][i] !== compareWord[i]) return prefix;
        }
        
        prefix = prefix + compareWord[i];
    }
    
    return prefix;
}

var strArr1 = ["flower", "flow", "flight"];
var strArr2 = ["leets", "leetcode", "leetsfight"];

console.log(longestCommonPrefix(strArr1));
console.log(longestCommonPrefix(strArr2));